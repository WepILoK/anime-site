import React from 'react';
import {FormField} from "../../../components/FormField/FormField";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerFormSchema} from "../../../utils/validations";

export const RegisterPage = () => {
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(registerFormSchema)
    })

    const onSubmit = (data: any) => console.log(data);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='authorization__header'>
                    Регистрация
                </div>
                <div className='authorization__fields'>
                    <FormField label='Почта' name='email' placeholder='Введите вашу почту'/>
                    <FormField label='Логин' name='userName' placeholder='Введите ваш логин'/>
                    <FormField label='Пароль' name='password' placeholder='Введите ваш пароль'/>
                    <FormField label='Пароль' name='password2' type='password' placeholder='Повторите пароль'/>
                </div>
                <div className='form__buttons'>
                    <button className='button'
                            type='submit'>
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};
