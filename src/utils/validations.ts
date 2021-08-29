import * as yup from "yup";


export const loginFormSchema = yup.object().shape({
    email: yup.string().email().required('Email обязателен!'),
    password: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен!'),
});