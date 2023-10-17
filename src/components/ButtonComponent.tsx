import React from 'react';
import { styled } from "styled-components";

type ButtonProps = {
  name: string;
  callBack: () => void;
  additionalClass?: string;
  disabled: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ name, disabled, callBack, additionalClass }) => {
  const onClickHandler = () => {
    if (disabled) {
      return
    }
    callBack();
  }

  return (<Button type="button" onClick={onClickHandler}
    className={disabled ? "no-active" : ""}
    disabled={disabled}> {name}</Button >)
}


const Button = styled.button`
  padding: 20px;
  border-radius: 7px;
  border: 1px solid #6de0fd;
  cursor: pointer;
  background-color: #6de0fd;
  margin: 0 10px 10px 10px;
  font-size: large;
  font-weight: 800;
}`
