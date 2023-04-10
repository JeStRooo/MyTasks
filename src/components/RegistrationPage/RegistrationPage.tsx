import React, { useState } from 'react';

import {NavLink} from "react-router-dom";
import {Formik} from "formik";

import RegistrationInputs from "./RegistrationInputs/RegistrationInputs";
import Button from "../../UI/Button/Button";
import CheckBox from "../../UI/CheckBox/CheckBox";

import {useDispatch} from "react-redux";
import {registrationAction} from "../../store/actions/registrationAction";

import {initialValues, validationSchema} from "../../mockData/patterns";

import {RegistrationType} from "../../types/registrationType";

import classes from "./RegistrationPage.module.scss";

const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const registrationUser = (name: string, email: string, password: string) => {
    const userData: RegistrationType = {
      name: name,
      email: email,
      password: password,
    }
    dispatch(registrationAction(userData))
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>Регистрация</h1>
        <Formik<RegistrationType>
          initialValues={initialValues}
          onSubmit={values => {
            delete values.confirmPassword
          }}
          validationSchema={validationSchema}
        >
          {({values,
              touched,
              errors,
              isValid,
              handleChange,
              handleBlur,
          }) => (
            <div className={classes.main__registration}>
              <RegistrationInputs
                touched={touched}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
              <div className={classes.main__registration__checkbox}>
                <CheckBox
                  onChange={() => setIsChecked(!isChecked)}
                  checked={isChecked}
                />
                <p>Я принимаю Условия обслуживания и прочитал Политику конфиденциальности</p>
              </div>
              <Button
                type="submit"
                onClick={() => registrationUser(values.name, values.email, values.password)}
                disabled={!isValid || !isChecked}
              >
                Зарегестрироваться
              </Button>
              <p className={classes.auth}>
                У вас уже есть учетная запись?
                <NavLink to="/auth" className={classes.auth__signup}>
                  Авторизоваться
                </NavLink>
              </p>
            </div>
          )}
        </Formik>
    </main>
  );
};

export default RegistrationPage;