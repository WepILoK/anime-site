import React, {useEffect} from 'react';
import {FormField} from "../../../components/FormField/FormField";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerFormSchema} from "../../../utils/validations";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUp, setUserMessage, setUserStatus} from "../../../store/ducks/user/actionCreators";
import {selectUserMessage, selectUserStatus} from "../../../store/ducks/user/selectors";
import {Status} from "../../../store/ducks/user/contracts/state";


export interface RegisterFormProps {
    email: string
    userName: string
    password: string
    password2: string
}

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const status = useSelector(selectUserStatus)
    const message = useSelector(selectUserMessage)
    const form = useForm<RegisterFormProps>({
        mode: 'onSubmit',
        resolver: yupResolver(registerFormSchema)
    })

    const onSubmit = (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    };

    useEffect(() => {
        return () => {
            dispatch(setUserStatus(Status.NEVER))
            dispatch(setUserMessage(null))
        }
    }, [])

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
                <div className='authorization__message'>
                    {status === Status.ERROR && message &&
                    <div className='authorization__message_error'>
                        {message}
                    </div>}
                    {status === Status.SIGNUP_SUCCESS && message &&
                    <div className='authorization__message_success'>
                        {message}
                    </div>}
                </div>
            </form>
        </FormProvider>
    );
};
