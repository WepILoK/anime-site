import React from 'react';
import './Authorization.scss'
import {Route} from "react-router-dom";
import {LoginPage} from "./components/Login";
import {RegisterPage} from "./components/Register";
import {AuthRoutes} from "../../routes";


export const Authorization = () => {

    return (
        <div className='container'>
            <div className='authorization'>
                <div className='section'>
                    <Route path={AuthRoutes.LOGIN} component={LoginPage} exact/>
                    <Route path={AuthRoutes.REGISTRATION} component={RegisterPage} exact/>
                </div>
            </div>
        </div>
    );
};
