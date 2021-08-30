import React from 'react';
import './Authorization.scss'
import {useHistory} from "react-router-dom";
import {LoginPage} from "./components/Login";
import {RegisterPage} from "./components/Register";


export const Authorization = () => {
    const history = useHistory()

    return (
        <div className='container'>
            <div className='section'>
                <div className='authorization'>
                    {history.location.pathname === '/login' ? (<LoginPage/>) : (<RegisterPage/>)}
                </div>
            </div>
        </div>
    );
};
