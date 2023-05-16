import React, {useState} from 'react';

import {NavLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {Formik} from "formik";
import {useDispatch} from "react-redux";

import RegistrationInputs from "./RegistrationInputs/RegistrationInputs";
import Button from "../../UI/Button/Button";
import CheckBox from "../../MUI/CheckBox/CheckBox";

import {registrationAction} from "../../store/actions/registrationAction";

import {initialValues, validationSchema} from "../../mockData/patterns";

import {RegistrationType} from "../../types/registrationType";

import classes from "./RegistrationPage.module.scss";

import logoDark from "../../assets/images/logo_dark.svg";

const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const registrationUser = (name: string, email: string, password: string) => {
    const userData: RegistrationType = {
      name: name,
      email: email,
      password: password,
    }
    dispatch(registrationAction(userData))
    navigate('/main-page')
    console.log(userData)
  }

  return (
    <main className={classes.main}>
      <img src={logoDark} alt="Tetrotom" className={classes.main__logo}/>
      <div className={classes.main__registration}>
        <h1 className={classes.main__registration__title}>Регистрация</h1>
        <Formik<RegistrationType>
          initialValues={initialValues}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
              values,
              touched,
              errors,
              isValid,
              handleChange,
              handleBlur,
            }) => (
            <div className={classes.main__registration__form}>
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
      </div>
    </main>
  );
};

export default RegistrationPage;