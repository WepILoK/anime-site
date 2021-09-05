import React from 'react';
import {FormField} from "../../../components/FormField/FormField";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerFormSchema} from "../../../utils/validations";
import {useDispatch} from "react-redux";
import {fetchSignUp} from "../../../store/ducks/user/actionCreators";


export interface RegisterFormProps {
    email: string
    userName: string
    password: string
    password2: string
}

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const form = useForm<RegisterFormProps>({
        mode: 'onSubmit',
        resolver: yupResolver(registerFormSchema)
    })

    const onSubmit = (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='authorization__header'>
                    Регистрация
                </div>
                <div className='authorization__fields'>
                    <FormField label='Почта' name='email' placeholder='Введите почту'/>
                    <FormField label='Логин' name='userName' placeholder='Введите логин'/>
                    <FormField label='Пароль' name='password' placeholder='Введите пароль'/>
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
