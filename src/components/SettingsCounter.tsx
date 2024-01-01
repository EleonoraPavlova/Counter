import React, { ChangeEvent } from 'react';
import '../App.css';
import { ButtonComponent } from "./ButtonComponent";
import { InputLabel } from "./InputLabel";
import { WrapCounter, Wrapper } from "../style/_mainStyle";
import { isDisabledSelector, maxSelector, startSelector } from "../bll/selectors/counterSelectors";
import { useSelector } from "react-redux";

export type SettingsCounterProps = {
  onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
  setHandler: () => void
  onBlurHandler: () => void
}

export const SettingsCounter: React.FC<SettingsCounterProps> = ({ onChangeHandlerMax, onChangeHandlerStart, setHandler, onBlurHandler }) => {
  const isDisabled = useSelector(isDisabledSelector)
  const max = useSelector(maxSelector)
  const start = useSelector(startSelector)

  return (
    <Wrapper>
      <WrapCounter>
        < InputLabel name="start:"
          inputValue={start}
          onChangeHandler={onChangeHandlerStart}
          onBlurHandler={onBlurHandler}
        />
        < InputLabel name="max: "
          inputValue={max}
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