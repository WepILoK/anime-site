import React, {useCallback} from 'react';
import {Link, Route, useHistory} from 'react-router-dom';
import './User.scss'
import {UserRoutes} from "../../routes";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "../../components/Profile/Profile";
import {Chat} from "./components/Chat/Chat";

export const User = () => {


    return (
        <div className='page__inner'>
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
                    <Route path={UserRoutes.PROFILE} exact component={Profile}/>
                    <Route path={UserRoutes.MESSAGES} exact component={Chat}/>
                </div>
                <div className='container__right-side'>
                    <Navbar/>
                </div>
            </div>
        </div>
    );
};

