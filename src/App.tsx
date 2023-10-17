import React, { ChangeEvent, useEffect } from 'react';
import './App.css';
import { Counter } from "./components/Counter";
import { SettingsCounter } from "./components/SettingsCounter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  DisabledAC, DisabledIncAC,
  DisabledResetAC, IncrementDecremenAC, SetErrorAC, SetMaxAC,
  SetOutputAC, SetPressAC, SetStartAC
} from "./state/reducer/counterReducer";
import {
  maxSelector,
  outputSelector, startSelector
} from "./state/selectors/counterSelectors";


const warning = "Enter values and press set"

function App() {
  const output = useSelector(outputSelector)
  const max = useSelector(maxSelector)
  const start = useSelector(startSelector)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   getlocalStorageHandler()
  // }, [])

  useEffect(() => {
    validation()
  }, [start, max]) //зависимости!!! попадает сюда каждый раз, как меняется start/max
  //если пустой [] - useEffect отрабатывает единижды

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
    // setlocalStorageHandler()
  }

  // const setlocalStorageHandler = () => {
  //   localStorage.setItem("valueStart", JSON.stringify(start))
  //   localStorage.setItem("valueMax", JSON.stringify(max))
  //   localStorage.setItem("valuePress", press)
  //   localStorage.setItem("valueError", error)
  // }

  // const getlocalStorageHandler = () => {
  //   let startString = localStorage.getItem("valueStart")
  //   let maxString = localStorage.getItem("valueMax")
  //   let pressValue = localStorage.getItem("valuePress")
  //   let errorValue = localStorage.getItem("valueError")

  //   if (startString) setStart(JSON.parse(startString))
  //   if (maxString) setMax(JSON.parse(maxString))

  //   if (pressValue) setPress(pressValue)
  //   if (errorValue) setError(errorValue)
  // }

  const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SetStartAC(e.target.valueAsNumber))
    if (!e.target.valueAsNumber) dispatch(SetStartAC(0))
    if (e.target.valueAsNumber > 0) {
      dispatch(SetPressAC(warning))
    }
  }

  const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SetMaxAC(e.target.valueAsNumber))
    if (!e.target.valueAsNumber) dispatch(SetMaxAC(0))
    if (e.target.valueAsNumber > 0) {
      dispatch(SetPressAC(warning))
    }
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
    if (start && max) {
      dispatch(DisabledResetAC(true))
    }
  }


  return (
    <AppWrapper >
      <SettingsCounter
        onChangeHandlerStart={onChangeHandlerStart}
        onChangeHandlerMax={onChangeHandlerMax}
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

