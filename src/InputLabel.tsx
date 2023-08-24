import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { styled } from "styled-components";

export type InputLabel = {
  name: string
}

export const InputLabel: React.FC<InputLabel> = ({ name }) => {
  let [inputValue, setInputValue] = useState<number>(0)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.currentTarget.value));
  }

  return (
    <InputLabelbox >
      <Label>{name}</Label>
      <Input type="number" id="name" name="name" required value={inputValue} onChange={onChangeHandler} />
    </InputLabelbox>
  );
}

const InputLabelbox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
}`

const Label = styled.label`
  color: #6de0fd;
  font-size: 25px;
  font-weight: 600;
}`

const Input = styled.input`
border: 1px solid 6de0fd;
}`