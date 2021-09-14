import React, {useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';
import './User.scss'
import {HomeRoutes, UserRoutes} from "../../routes";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "../../components/Profile/Profile";
import {Chat} from "./components/Chat/Chat";
import {useSelector} from "react-redux";
import {selectIsAuth, selectUserData} from "../../store/ducks/user/selectors";
import {Notifications} from "./components/Notifications/Notifications";
import {Settings} from "./components/Settings/Settings";


export const User = () => {
    const isAuth = useSelector(selectIsAuth)
    const history = useHistory()
    const userData = useSelector(selectUserData)

    useEffect(() => {
        if(!isAuth) {
            history.push(HomeRoutes.ROOT)
        }
    }, [isAuth])

    if (isAuth) {
        return (
            <div className='container'>
                <div className='container__left-side'>
                    <Route path={UserRoutes.PROFILE} render={() => userData && <Profile {...userData}/>}/>
                    <Route path={UserRoutes.NOTIFICATIONS} component={Notifications}/>
                    <Route path={UserRoutes.SETTINGS} component={Settings}/>
                    <Route path={UserRoutes.MESSAGES} component={Chat}/>
                </div>
                <div className='container__right-side'>
                    <Navbar/>
                </div>
            </div>
        );
    } else return null
};

