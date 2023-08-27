import React, { ChangeEvent } from 'react';
import './App.css';
import { ButtonComponent } from "./ButtonComponent";
import { InputLabel } from "./InputLabel";
import { WrapCounter, Wrapper } from "./style/_mainStyle";

export type SettingsCounterProps = {
  inputValueMax: number
  inputValueStart: number
  onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
  setHandler: () => void
}

export const SettingsCounter: React.FC<SettingsCounterProps> = ({ inputValueMax, inputValueStart, onChangeHandlerMax, onChangeHandlerStart, setHandler }) => {
  return (
    <Wrapper>
      <WrapCounter>
        < InputLabel name="start:" inputValue={inputValueStart} onChangeHandler={onChangeHandlerStart} />
        < InputLabel name="max: " inputValue={inputValueMax} onChangeHandler={onChangeHandlerMax} />
      </WrapCounter>
      <WrapCounter className="flex">
        <ButtonComponent name="set" disabled={true} additionalClass={"class"} callBack={setHandler} />
      </WrapCounter>
    </ Wrapper>
  );
}
