import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Counter } from "./Counter";
import { SettingsCounter } from "./SettingsCounter";
import styled from "styled-components";


function App() {
  let [output, setoutput] = useState<number>(0)

  let [isDisabled, setDisabled] = useState<boolean>(false);
  let [isDisabledReset, setDisabledReset] = useState<boolean>(false); //открыто
  let [isDisabledInc, setisDisabledInc] = useState<boolean>(false); //открыто

  let [max, setMax] = useState<number>(0);
  let [start, setStart] = useState<number>(0);

  let [press, setPress] = useState<string>("");
  let [error, setError] = useState<string>("");


  useEffect(() => {
    validation()
  }, [start, max])

  const validation = () => {
    if (start === 0 && max === 0) {
      setError("")
      setDisabledReset(true)
      setisDisabledInc(true)
    } else if ((start < 0 || max < 0) || start === max || start > max) {
      setError("incorrect value")
      setDisabled(true)
      setisDisabledInc(true)
    } else {
      setError("")
      setDisabled(false)
      setoutput(output)
    }
  }

  const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.valueAsNumber)
    if (!e.target.valueAsNumber) setStart(0)
    if (e.target.valueAsNumber > 0) {
      setPress("Enter values and press set")
    }
  }

  const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.valueAsNumber)
    if (!e.target.valueAsNumber) setMax(0)
    if (e.target.valueAsNumber > 0) {
      setPress("Enter values and press set")
    }
  }

  const setHandler = () => {
    console.log("setHandler")
    setoutput(start)
    setDisabledReset(true)
    setisDisabledInc(false)
    setPress("")
    if (start === output) {
      setDisabled(false)
    }
  }

  const incHandler = () => {
    console.log("incHandler")
    setDisabled(true)
    if (output < max) {
      setoutput(prev => prev + 1)
    }

    if (output + 1 === max) {
      setDisabledReset(false)
      setisDisabledInc(true)
    }
  }


  const resetHandler = () => {
    console.log("resetHandler")
    setoutput(start)
    setDisabled(true)
    setisDisabledInc(false)
    if (output === start) {
      setDisabledReset(true)
    }
    setDisabledReset(true)
  }

  const onBlurHandler = () => {
    if (start && max) {
      setDisabledReset(true)
    }
  }


  return (
    <AppWrapper >
      <SettingsCounter inputValueMax={max}
        inputValueStart={start}
        onChangeHandlerStart={onChangeHandlerStart}
        onChangeHandlerMax={onChangeHandlerMax}
        setHandler={setHandler}
        isDisabled={isDisabled}
        onBlurHandler={onBlurHandler}
        max={max}
      />
      <Counter output={output}
        start={start} max={max}
        error={error}
        press={press}
        incHandler={incHandler}
        resetHandler={resetHandler}
        isDisabledInc={isDisabledInc}
        isDisabledReset={isDisabledReset} />
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

