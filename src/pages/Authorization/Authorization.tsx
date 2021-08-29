import React, {useState} from 'react';
import './Authorization.scss'
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {loginFormSchema} from "../../utils/validations";


export const Authorization = () => {
    const [formType, setFormType] = useState<'login' | 'registration'>('login')
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginFormSchema)
    })
    const history = useHistory()
    console.log(history.location.pathname.slice(1));
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className='container'>
            <div className='authorization'>
                <div className='section'>
                    <div className='authorization__header'>
                        Авторизация
                    </div>
                    <div className='form__buttons'>
                        <div className='button'>Войти</div>
                        <div className='button'>Зарегистрироваться</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
