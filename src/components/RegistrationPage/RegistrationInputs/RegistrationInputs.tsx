import React from 'react';

import Input from "../../../UI/Input/Input";

import classes from "../RegistrationPage.module.scss";
import inputClasses from "../../../UI/Input/Input.module.scss";

import {FormikPropsType} from "../../../types/registrationType";

const RegistrationInputs = ({touched, errors, values, handleChange, handleBlur}: FormikPropsType) => {
  return (
    <div className={classes.main__registration__inputs}>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="text"
          name="name"
          placeholder="Введите имя"
          className={!(touched.name && errors.name) ? inputClasses.myInput : inputClasses.myInputError}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name &&
          <p className={classes.error}>{errors.name}</p>
        }
      </div>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="text"
          name="email"
          placeholder="Введите почту"
          className={!(touched.email && errors.email) ? inputClasses.myInput : inputClasses.myInputError}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email &&
          <p className={classes.error}>{errors.email}</p>
        }
      </div>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="text"
          name="password"
          className={!(touched.password && errors.password) ? inputClasses.myInput : inputClasses.myInputError}
          placeholder="Введите пароль"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password &&
          <p className={classes.error}>{errors.password}</p>
        }
      </div>
      <div className={classes.main__registration__inputs__block}>
        <Input
          type="text"
          name="confirmPassword"
          className={!(touched.confirmPassword && errors.confirmPassword) ? inputClasses.myInput : inputClasses.myInputError}
          placeholder="Подтвердите пароль"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword &&
          <p className={classes.error}>{errors.confirmPassword}</p>
        }
      </div>
    </div>
  );
};

export default RegistrationInputs;