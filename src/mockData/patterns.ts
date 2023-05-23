import * as yup from "yup";

import Home from "../assets/images/main-page.svg";
import Avatar from "../assets/images/avatar.svg";

export const validationSchemaRegistration = {
  name: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(/^[а-яА-ЯЁ ё]+$/, "Введено некорректное значение")
    .max(20, "Слишком много символов"),

  email: yup
    .string()
    .required("Поле обязательно для заполнения")
    .email("Введено некорректное значение"),

  password: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}/, "Введено некорректное значение"),

  confirmPassword: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf([yup.ref(`password`)], "Пароли не совпадают")
}

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export const validationSchema = yup.object().shape({...validationSchemaRegistration});

export const links = [
  {
    img: Home,
    title: 'Главная',
    path: '/main-page'
  },
  {
    img: Avatar,
    title: 'Профиль',
    path: '/home-page/myProfile'
  }
]