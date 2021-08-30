import React from 'react';
import {FormField} from "../../../components/FormField/FormField";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/validations";
import {useDispatch} from "react-redux";
import {fetchSignIn} from "../../../store/ducks/user/actionCreators";

export const LoginPage = () => {
    const dispatch = useDispatch()
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(loginFormSchema)
    })

    const onSubmit = (data: any) => {
        dispatch(fetchSignIn(data))
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='authorization__header'>
                    Авторизация
                </div>
                <div className='authorization__fields'>
                    <FormField label='Почта' name='email' placeholder='Введите вашу почту'/>
                    <FormField label='Пароль' name='password' placeholder='Введите ваш пароль'/>
                </div>
                <div className='form__buttons'>
                    <button className='button'
                            type='submit'>
                        Войти
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};
