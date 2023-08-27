import React, { useState } from 'react';
import './App.css';
import { ButtonComponent } from "./ButtonComponent";
import { styled } from "styled-components";
import { WrapCounter, Wrapper } from "./style/_mainStyle";

export type CounterType = {
  output: number
  start: number
  max: number
  isDisabled: boolean
  incHandler: () => void
  resetHandler: () => void
}

export const Counter: React.FC<CounterType> = ({ start, max, output, isDisabled, incHandler, resetHandler }) => {

  return (
    <Wrapper >
      <WrapCounter >
        <OutputStyle className={output === max ? "red" : ""}>{output}</OutputStyle>
      </WrapCounter>
      <WrapCounter className="flex">
        <ButtonComponent name="inc" disabled={isDisabled} additionalClass={output < max ? "" : "no-active"} callBack={incHandler} />
        <ButtonComponent name="reset" disabled={isDisabled} additionalClass={output === 0 ? "no-active" : ""} callBack={resetHandler} />
      </WrapCounter>
    </Wrapper >
  );
}


const OutputStyle = styled.p`
  border-radius: 7px;
  border: 1px solid #6de0fd;
  background-color: #6de0fd;
  padding: 15px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  &.red {
    color: red;
}
}`

