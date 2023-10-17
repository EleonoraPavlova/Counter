import React from 'react';
import '../App.css';
import { ButtonComponent } from "./ButtonComponent";
import { styled } from "styled-components";
import { WrapCounter, Wrapper } from "../style/_mainStyle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { errorMessageSelector, isDisabledIncSelector, isDisabledResetSelector, maxSelector, outputSelector, pressMessageSelector, startSelector } from "../state/selectors/counterSelectors";


export type CounterType = {
  incHandler: () => void
  resetHandler: () => void
}

export const Counter: React.FC<CounterType> = ({ incHandler, resetHandler }) => {
  const output = useSelector(outputSelector)
  const error = useSelector(errorMessageSelector)
  const press = useSelector(pressMessageSelector)
  const max = useSelector(maxSelector)
  const isDisabledReset = useSelector(isDisabledResetSelector)
  const isDisabledInc = useSelector(isDisabledIncSelector)
  const start = useSelector(startSelector)

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

