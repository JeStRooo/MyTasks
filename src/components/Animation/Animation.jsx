import React from 'react';

import classes from "./Animation.module.css";
import page from "../../assets/page.gif";

const Animation = () => {
  return (
    <div className={classes.modal}>
      <h1 className={classes.modal__title}>Это что, модальное окно?</h1>
      <img src={page} alt="Ой!" className={classes.modal__img}/>
    </div>
  );
};

export default Animation;