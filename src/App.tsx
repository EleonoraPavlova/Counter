import React, { ChangeEvent, useEffect } from 'react';
import './App.css';
import { Counter } from "./components/Counter";
import { SettingsCounter } from "./components/SettingsCounter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  DisabledAC, DisabledIncAC,
  DisabledResetAC, SetErrorAC, SetMaxAC,
  SetOutputAC, SetPressAC, SetStartAC
} from "./bll/reducer/counterReducer";
import {
  maxSelector,
  outputSelector, startSelector
} from "./bll/selectors/counterSelectors";
import { AppDispatchType } from "./bll/store";

const warning = "Enter values and press set"

function App() {
  const output = useSelector(outputSelector)
  const max = useSelector(maxSelector)
  const start = useSelector(startSelector)

  const dispatch = useDispatch<AppDispatchType>()

  useEffect(() => {
    validation()
  }, [dispatch, start, max])

  const validation = () => {
    if (start === 0 && max === 0) {
      dispatch(SetErrorAC(""))
      dispatch(DisabledResetAC(true))
      dispatch(DisabledIncAC(true))
    } else if ((start < 0 || max < 0) || start === max || start > max) {
      dispatch(SetErrorAC("incorrect value"))
      dispatch(DisabledAC(true))
      dispatch(DisabledIncAC(true))
    } else {
      dispatch(SetErrorAC(""))
      dispatch(DisabledAC(false))
      dispatch(SetOutputAC(output))
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, type: 'start' | 'max') => {
    const value = e.currentTarget.valueAsNumber;
    if (/^\d{1,5}$/.test(String(value))) {
      dispatch(type === 'start' ? SetStartAC(Number.isNaN(value) ? 0 : Math.trunc(value)) : SetMaxAC(Number.isNaN(value) ? 0 : Math.trunc(value)));
      if (value > 0) dispatch(SetPressAC(warning));
    }
    if (!value) dispatch(type === 'start' ? SetStartAC(0) : SetMaxAC(0));
  }

  const setHandler = () => {
    dispatch(SetOutputAC(start))
    dispatch(DisabledResetAC(true))
    dispatch(DisabledIncAC(false))
    dispatch(SetPressAC(""))
    if (start === output) {
      dispatch(DisabledAC(false))
    }
  }

  const incHandler = () => {
    dispatch(DisabledAC(true))
    if (output < max) {
      dispatch(SetOutputAC(output + 1))
    }

    if (output + 1 === max) {
      dispatch(DisabledResetAC(false))
      dispatch(DisabledIncAC(true))
    }
  }


  const resetHandler = () => {
    dispatch(SetOutputAC(start))
    dispatch(DisabledAC(true))
    dispatch(DisabledIncAC(false))
    if (output === start) {
      dispatch(DisabledResetAC(true))
    }
    dispatch(DisabledResetAC(true))
  }

  const onBlurHandler = () => {
    if (start && max) dispatch(DisabledResetAC(true))
  }


  return (
    <AppWrapper >
      <SettingsCounter
        onChangeHandlerStart={(e) => onChangeHandler(e, "start")}
        onChangeHandlerMax={(e) => onChangeHandler(e, "max")}
        setHandler={setHandler}
        onBlurHandler={onBlurHandler}
      />
      <Counter
        incHandler={incHandler}
        resetHandler={resetHandler} />
    </AppWrapper >
  );
}
export default App;


const AppWrapper = styled.div`
  margin: 5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
`;