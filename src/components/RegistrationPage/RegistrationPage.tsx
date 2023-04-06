import React, { useEffect, useState } from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import RegistrationInputs from "./RegistrationInputs/RegistrationInputs";

import {useDispatch, useSelector} from "react-redux";
import {registrationAction} from "../../store/actions/registrationAction";
import {validationSchemaRegistration} from "../../mockData/patterns";

import {Formik} from "formik";

import * as yup from "yup";

import {RegistrationType} from "../../types/registrationType";
import {RootType} from "../../store/reducers/reducers";

import classes from "./RegistrationPage.module.scss";
import Button from "../../UI/Button/Button";
import CheckBox from "../../UI/CheckBox/CheckBox";

interface InitialValues {
  name: string,
  email: string,
  password: string,
  confirmPassword?: string
}

const RegistrationPage = () => {
  const registration = useSelector((state: RootType) => state.registration);
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isNavigate, setIsNavigate] = useState<boolean>(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (isNavigate) {
      navigate('auth', {replace: true})
    }
  }, [isNavigate])

  const validationSchema = yup.object().shape({...validationSchemaRegistration});

  const registrationUser = (name: string, email: string, password: string) => {
    const userData: RegistrationType = {
      name: name,
      email: email,
      password: password,
    }
    dispatch(registrationAction(userData))
    console.log(registration)
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>Регистрация</h1>
        <Formik<InitialValues>
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          onSubmit={values => {
            values.confirmPassword = ''
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
                  onChange={(e: any) => setIsChecked(e.target.checked)}
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