import React from 'react';

import Input from "../../../UI/Input/Input";

import {CheckedInput, FormikPropsType} from "../../../types/registrationType";

import classes from "./RegistrationInputs.module.scss";
import inputClasses from "../../../UI/Input/Input.module.scss";

const RegistrationInputs = ({touched, errors, values, handleChange, handleBlur}: FormikPropsType) => {

  const isInputError = ({errors, touched, inputName}: CheckedInput) => {
    return !(touched[inputName] && errors[inputName]) ? inputClasses.myInput : inputClasses.myInputError;
  };

  const isErrorMessage = ({errors, touched, inputName}: CheckedInput) => {
    return touched[inputName] && errors[inputName] &&
      <p className={classes.error}>{errors[inputName]}</p>
  }

  return (
    <div className={classes.main__registration__inputs}>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="text"
          name="name"
          placeholder="Введите имя"
          className={isInputError({errors, touched, inputName: 'name' })}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {isErrorMessage({errors, touched, inputName: 'name' })}
      </div>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="email"
          name="email"
          placeholder="Введите почту"
          className={isInputError({errors, touched, inputName: 'email' })}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {isErrorMessage({errors, touched, inputName: 'email' })}
      </div>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="password"
          name="password"
          className={isInputError({errors, touched, inputName: 'password' })}
          placeholder="Введите пароль"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {isErrorMessage({errors, touched, inputName: 'password' })}
      </div>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="password"
          name="confirmPassword"
          className={isInputError({errors, touched, inputName: 'confirmPassword' })}
          placeholder="Подтвердите пароль"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {isErrorMessage({errors, touched, inputName: 'confirmPassword' })}
      </div>
    </div>
  );
};

export default RegistrationInputs;