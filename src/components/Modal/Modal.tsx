import React, {useState} from 'react';

import classes from "./Modal.module.scss";

import error from "../../assets/error.gif";

const Modal = () => {
  const [isModal, setIsModal] = useState(true)

  const showModal = () => {
    setIsModal(!isModal)
  }

  return (
    <>
      <button className={classes.button} onClick={showModal}>
        {!isModal ? 'Показать модальное окно' : 'Скрыть модальное окно'}
      </button>
      <div className={isModal ? classes.modal : classes.not_modal}>
        <h1 className={classes.modal__title}>Это что, модальное окно?</h1>
        <img src={error} alt="Ой!" className={classes.modal__img}/>
      </div>
    </>
  )
    ;
};

export default Modal;