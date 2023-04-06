import * as yup from "yup";

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