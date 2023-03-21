import React from 'react';

import classes from "./MyButton.module.scss"

type ButtonType = {
  children: React.ReactNode
}

const MyButton = ({children, ...props}: ButtonType) => {
  return (
    <>
      <button {...props} className={classes.my_button}>
        {children}
      </button>
    </>
  );
};

export default MyButton;