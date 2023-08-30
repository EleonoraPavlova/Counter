import React from 'react';
import './App.css';
import { ButtonComponent } from "./ButtonComponent";
import { styled } from "styled-components";
import { WrapCounter, Wrapper } from "./style/_mainStyle";

export type CounterType = {
  output: number
  start: number | null
  max: number | null
  error: string
  press: string
  isDisabledInc: boolean
  isDisabledReset: boolean
  incHandler: () => void
  resetHandler: () => void
}

export const Counter: React.FC<CounterType> = ({ start, max,
  output, error, press, isDisabledInc, isDisabledReset,
  incHandler, resetHandler }) => {
  console.log("press: ", press)
  console.log("error: ", error)

  return (
    <Wrapper >
      <WrapCounter > {press === "" ?
        <OutputStyle className={(output === max && output !== 0) ? "red" : ""} >{output}</OutputStyle>
        :
        error !== "" ?
          <OutputStyle className="red">{error}</OutputStyle>
          :
          <OutputStyle>{press}</OutputStyle>
      }

        {/* {press ? : ""} */}
      </WrapCounter>
      <WrapCounter className="flex">
        <ButtonComponent name="inc"
          disabled={isDisabledInc}
          additionalClass={isDisabledInc ? "no-active" : ""}
          callBack={incHandler} />
        <ButtonComponent name="reset"
          disabled={isDisabledReset}
          additionalClass={(output === start) || !isDisabledReset || output !== max ? "no-active" : ""}
          callBack={resetHandler} />
      </WrapCounter>
    </Wrapper >
  );
}
// additionalClass={output < max || !isDisabled ? "" : "no-active"}

//    additionalClass={output === start || isDisabled ? "no-active" : ""}
const OutputStyle = styled.p`
  border-radius: 7px;
  border: 1px solid #6de0fd;
  background-color: #6de0fd;
  padding: 15px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #2e323c;
  &.red {
    color: red;
}
}`

