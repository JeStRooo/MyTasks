import React from 'react';

import {buttonType} from "../../types/buttonType";

import classes from "./Button.module.scss"

const Button: React.FC<buttonType> = (
  {type, children, onClick, disabled}
) => {
  return (
    <>
      <button type={type} onClick={onClick} className={classes.myButton} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;