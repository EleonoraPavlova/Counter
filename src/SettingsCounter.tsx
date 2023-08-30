import React, { ChangeEvent } from 'react';
import './App.css';
import { ButtonComponent } from "./ButtonComponent";
import { InputLabel } from "./InputLabel";
import { WrapCounter, Wrapper } from "./style/_mainStyle";

export type SettingsCounterProps = {
  inputValueMax: number
  inputValueStart: number
  isDisabled: boolean
  max: number
  onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
  setHandler: () => void
  onBlurHandler: () => void
}

export const SettingsCounter: React.FC<SettingsCounterProps> = ({ inputValueMax, inputValueStart, isDisabled, max, onChangeHandlerMax, onChangeHandlerStart, setHandler, onBlurHandler }) => {
  console.log("inputValueStart:", inputValueStart)
  console.log("inputValueMax:", inputValueMax)
  return (
    <Wrapper>
      <WrapCounter>
        < InputLabel name="start:"
          inputValue={inputValueStart}
          onChangeHandler={onChangeHandlerStart}
          onBlurHandler={onBlurHandler}
        />
        < InputLabel name="max: "
          inputValue={inputValueMax}
          onChangeHandler={onChangeHandlerMax}
          onBlurHandler={onBlurHandler}
        />
      </WrapCounter>
      <WrapCounter className="flex">
        <ButtonComponent name="set"
          disabled={isDisabled} callBack={setHandler} />
      </WrapCounter>
    </ Wrapper>
  );
}
