import React, { useState } from 'react';
import './App.css';
import { ButtonComponent } from "./ButtonComponent";
import { InputLabel } from "./InputLabel";
import { WrapCounter, Wrapper } from "./style/_mainStyle";

// export type SettingsCounter = {

// }

export function SettingsCounter() {

  return (
    <Wrapper>
      <WrapCounter>
        < InputLabel name="max:" />
        < InputLabel name="start:" />
      </WrapCounter>
      <WrapCounter >
        <ButtonComponent name="set" disabled={true} additionalClass={"class"} callBack={() => alert()} />
      </WrapCounter>
    </ Wrapper>
  );
}
