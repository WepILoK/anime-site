import React, {useEffect} from 'react';
import './Authorization.scss'
import {Route, useHistory} from "react-router-dom";
import {LoginPage} from "./components/Login";
import {RegisterPage} from "./components/Register";
import {AuthRoutes, HomeRoutes} from "../../routes";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/ducks/user/selectors";


export const Authorization = () => {
    const isAuth = useSelector(selectIsAuth)
    const history = useHistory()

    useEffect(() => {
        if(isAuth) {
            history.push(HomeRoutes.ROOT)
        }
    }, [isAuth])

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
