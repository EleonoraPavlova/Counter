import React, { ChangeEvent } from 'react';
import './App.css';
import { styled } from "styled-components";

export type InputLabel = {
  name: string
  inputValue: number
  additionalClass?: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onBlurHandler?: () => void
}

export const InputLabel: React.FC<InputLabel> = ({ name, inputValue, onChangeHandler, onBlurHandler }) => {


  return (
    <InputLabelbox >
      <Label>{name}</Label>
      <Input type="number" id="name" name="name"
        value={inputValue}
        onChange={onChangeHandler}
        className={inputValue < 0 ? "inputred" : ""}
        onBlur={onBlurHandler}
        required
      />
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
   width: 27%;
}`

const Input = styled.input`
    padding: 7px;
    border: 1px solid #6de0fd;
    background-color: #6de0fd;
    border-radius: 7px;
    font-weight: 700;
    font-size: 28px;
    color: #2e323c;
    width: 56%;
    text-align: center;
    &.inputred {
       border: 1px solid #ff3b1f;
       background-color: #ff3b1f;
    }
}`