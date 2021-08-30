import * as yup from "yup";


export const loginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательна'),
    password: yup.string().min(6, 'Длина пароля не менее 6 символов').required('Пароль обязателен'),
});

export const registerFormSchema = yup.object().shape({
    userName: yup.string().required('Введите логин'),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
}).concat(loginFormSchema)