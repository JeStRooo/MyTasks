import React from 'react';

import classes from "./MyInput.module.scss";

const MyInput = (props: any) => {
  return (
    <>
      <input className={classes.my_input} {...props} />
    </>
  );
};

export default MyInput;