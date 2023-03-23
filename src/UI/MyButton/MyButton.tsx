import React from 'react';

import {buttonType} from "../../types/buttonType";

import classes from "./MyButton.module.scss"

const MyButton = ({children, ...props}: buttonType) => {
  return (
    <>
      <button {...props} className={classes.myButton}>
        {children}
      </button>
    </>
  );
};

export default MyButton;