import React, {useEffect} from 'react';
import {FormField} from "../../../components/FormField/FormField";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/validations";
import {fetchSignIn, setUserMessage, setUserStatus} from "../../../store/ducks/user/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {Status} from "../../../store/ducks/user/contracts/state";
import {selectUserMessage, selectUserStatus} from "../../../store/ducks/user/selectors";
import {useHistory} from "react-router-dom";
import {HomeRoutes} from "../../../routes";


export interface LoginFormProps {
    email: string
    password: string
}

export const LoginPage = () => {
    const dispatch = useDispatch()
    const status = useSelector(selectUserStatus)
    const history = useHistory()
    const message = useSelector(selectUserMessage)
    const form = useForm<LoginFormProps>({
        mode: 'onSubmit',
        resolver: yupResolver(loginFormSchema)
    })

    const onSubmit = (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    };

    useEffect(() => {
        if (status === Status.SUCCESS) {
            history.push(HomeRoutes.ROOT)
        }
    }, [status])

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
                <div className='authorization__message'>
                    {status === Status.ERROR && message &&
                    <div className='authorization__message_error'>
                        {message}
                    </div>}
                    {status === Status.SUCCESS && message &&
                    <div className='authorization__message_success'>
                        {message}
                    </div>}
                </div>
            </form>
        </FormProvider>
    );
};
