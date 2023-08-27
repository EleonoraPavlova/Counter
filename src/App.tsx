import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Counter } from "./Counter";
import { SettingsCounter } from "./SettingsCounter";
import styled from "styled-components";

function App() {
  let [output, setoutput] = useState<number>(0)
  let [isDisabled, setDisabled] = useState<boolean>(true);
  let [max, setMax] = useState<number>(0);
  let [start, setStart] = useState<number>(0);
  // let [mistake, setMistake] = useState<string>("");

  const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(Number(e.currentTarget.value))
  }

  const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(Number(e.currentTarget.value))
  }

  //set
  const setHandler = () => {
    console.log("setHandler")
    setoutput(start)
  }

  //: setMistake("Value is not defined")

  //output
  const incHandler = () => {
    if (output < 5) {
      setoutput(output += 1)
    }
    setDisabled(false)
  }

  const resetHandler = () => setoutput(start)

  return (
    <AppWrapper >
      <SettingsCounter inputValueMax={max}
        inputValueStart={start} onChangeHandlerStart={onChangeHandlerStart}
        onChangeHandlerMax={onChangeHandlerMax} setHandler={setHandler} />
      <Counter output={output} start={start} max={max} incHandler={incHandler} resetHandler={resetHandler} isDisabled={isDisabled} />
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
