import React from 'react';
import {Link, Route, useHistory, useParams} from 'react-router-dom';
import './Profile.scss'
import {ProfileRoutes} from "../../routes";

export const Profile = () => {
    const params = useParams();
    const history = useHistory()

    console.log(history.location.pathname)
    const addActiveClass = (route: string): string => {
        return history.location.pathname === route ? ' active' : ''
    }

    return (
        <div className='page__inner'>
            <div className='container'>
                <div className='container__left-side'>
                    <Route path={ProfileRoutes.NOTIFICATIONS} exact>
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
                </div>
                <div className='container__right-side'>
                    <div className='navbar'>
                        <div className='section'>
                            <div className='section__header_right-side'>
                                Меню
                            </div>
                            <div className='navbar__body'>
                                <Link to={ProfileRoutes.USER}>
                                    <div className={'navbar__item' + addActiveClass(ProfileRoutes.USER)}>
                                        Мой профиль
                                    </div>
                                </Link>
                                <Link to={ProfileRoutes.MESSAGES}>
                                    <div className={'navbar__item' + addActiveClass(ProfileRoutes.MESSAGES)}>
                                        Сообщения
                                    </div>
                                </Link>
                                <Link to={ProfileRoutes.FRIENDS}>
                                    <div className={'navbar__item' + addActiveClass(ProfileRoutes.FRIENDS)}>
                                        Друзья
                                    </div>
                                </Link>
                                <Link to={ProfileRoutes.NOTIFICATIONS}>
                                    <div className={'navbar__item' + addActiveClass(ProfileRoutes.NOTIFICATIONS)}>
                                        Уведомления
                                    </div>
                                </Link>
                                <Link to={ProfileRoutes.ANIME_LIST}>
                                    <div className={'navbar__item' + addActiveClass(ProfileRoutes.ANIME_LIST)}>
                                        Список аниме
                                    </div>
                                </Link>
                                <Link to={ProfileRoutes.SETTINGS}>
                                    <div className={'navbar__item' + addActiveClass(ProfileRoutes.SETTINGS)}>
                                        Настройки
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

