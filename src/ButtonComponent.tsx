import React from 'react';
import { styled } from "styled-components";

type ButtonProps = {
  name: string;
  callBack: () => void;
  additionalClass?: string;
  disabled: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ name, callBack, additionalClass }) => {
  const onClickHandler = () => callBack();

  return (<Button type="button" onClick={onClickHandler} className={additionalClass}> {name}</Button >)
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
