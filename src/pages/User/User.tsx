import React, {useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';
import './User.scss'
import {HomeRoutes, UserRoutes} from "../../routes";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "../../components/Profile/Profile";
import {Chat} from "./components/Chat/Chat";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/ducks/user/selectors";


export const User = () => {
    const isAuth = useSelector(selectIsAuth)
    const history = useHistory()

    useEffect(() => {
        if(!isAuth) {
            history.push(HomeRoutes.ROOT)
        }
    }, [isAuth])

    return (
            <div className='container'>
                <div className='container__left-side'>
                    <Route path={UserRoutes.NOTIFICATIONS} exact>
                        <div className='section'>
                            <div className='section__body'>
                                <div className='updates'>
                                    {new Array(15).fill('').map(i =>
                                        <div className='updates__item'>
                                            <img className='updates__avatar'
                                                 src={require("../../assets/images/animeAvatar.png").default}/>
                                            <div className='updates__content'>
                                                <div className='updates__header'>
                                                    <div className='updates__name'>
                                                        Название аниме
                                                    </div>
                                                    <div className='updates__date'>
                                                        сегодня
                                                    </div>
                                                </div>
                                                <div className='updates__body'>
                                                    <div className='updates__series'>
                                                        <div className='updates__series_number'>
                                                            Серия 1
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path={UserRoutes.PROFILE} component={Profile}/>
                    <Route path={UserRoutes.MESSAGES} component={Chat}/>
                </div>
                <div className='container__right-side'>
                    <Navbar/>
                </div>
            </div>
    );
};

