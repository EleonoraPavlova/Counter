import React, { useState } from 'react';
import './App.css';
import { ButtonComponent } from "./ButtonComponent";
import { styled } from "styled-components";
import { WrapCounter, Wrapper } from "./style/_mainStyle";

export function Counter() {
  let [output, setoutput] = useState<number>(0)
  const [isDisabled, setDisabled] = useState(true);

  const incHandler = () => {
    if (output < 5) {
      setoutput(output += 1)
    }
    setDisabled(false)
  }

  const resetHandler = () => setoutput(0)

  return (
    <Wrapper >
      <WrapCounter >
        <OutputStyle className={output === 5 ? "red" : ""}>{output}</OutputStyle>
      </WrapCounter>
      <WrapCounter>
        <ButtonComponent name="inc" disabled={isDisabled} additionalClass={output < 5 ? "" : "no-active"} callBack={incHandler} />
        <ButtonComponent name="reset" disabled={isDisabled} additionalClass={output === 0 ? "no-active" : ""} callBack={resetHandler} />
      </WrapCounter>
    </Wrapper >
  );
}


const OutputStyle = styled.p`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  &.red {
    color: red;
}
}`

