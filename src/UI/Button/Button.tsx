import React from 'react';

import {buttonType} from "../../types/buttonType";

import classes from "./Button.module.scss"

const Button = ({children, ...props}: buttonType) => {
  return (
    <>
      <button {...props} className={classes.myButton}>
        {children}
      </button>
    </>
  );
};

export default Button;