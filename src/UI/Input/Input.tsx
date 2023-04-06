import React, {InputHTMLAttributes} from 'react';

import classes from "./Input.module.scss";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
      <input className={classes.myInput} {...props} />
  );
};

export default Input;