import React from 'react';

import classes from "./Input.module.scss";

const Input = (props: any) => {
  return (
    <>
      <input className={classes.myInput} {...props} />
    </>
  );
};

export default Input;