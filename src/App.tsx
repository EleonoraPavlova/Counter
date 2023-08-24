import React, { useState } from 'react';
import './App.css';
import { Counter } from "./Counter";
import { SettingsCounter } from "./SettingsCounter";
import styled from "styled-components";

function App() {
  // let [output, setoutput] = useState<number>(0)
  // const [isDisabled, setDisabled] = useState(true);

  return (
    <AppWrapper >
      <SettingsCounter />
      <Counter />
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
