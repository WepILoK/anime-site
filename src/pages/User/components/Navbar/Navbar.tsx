import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {UserRoutes} from "../../../../routes";



export const Navbar: React.FC = () => {
    const [update, setUpdate] = useState(true)
    const history = useHistory()
    const addActiveClass = (route: string): string => {
        return history.location.pathname === route ? ' active' : ''
    }

    return (
        <div className='navbar'>
            <div className='section'>
                <div className='section__header_right-side'>
                    Меню
                </div>
                <div className='navbar__body'>
                    <Link to={UserRoutes.PROFILE}>
                        <div className={'navbar__item' + addActiveClass(UserRoutes.PROFILE)}
                        onClick={() => setUpdate(c => !c)}>
                            Мой профиль
                        </div>
                    </Link>
                    <Link to={UserRoutes.MESSAGES}>
                        <div className={'navbar__item' + addActiveClass(UserRoutes.MESSAGES)}
                        onClick={() => setUpdate(c => !c)}>
                            Сообщения
                        </div>
                    </Link>
                    <Link to={UserRoutes.FRIENDS}>
                        <div className={'navbar__item' + addActiveClass(UserRoutes.FRIENDS)}
                        onClick={() => setUpdate(c => !c)}>
                            Друзья
                        </div>
                    </Link>
                    <Link to={UserRoutes.NOTIFICATIONS}>
                        <div className={'navbar__item' + addActiveClass(UserRoutes.NOTIFICATIONS)}
                        onClick={() => setUpdate(c => !c)}>
                            Уведомления
                        </div>
                    </Link>
                    <Link to={UserRoutes.ANIME_LIST}>
                        <div className={'navbar__item' + addActiveClass(UserRoutes.ANIME_LIST)}
                        onClick={() => setUpdate(c => !c)}>
                            Список аниме
                        </div>
                    </Link>
                    <Link to={UserRoutes.SETTINGS}>
                        <div className={'navbar__item' + addActiveClass(UserRoutes.SETTINGS)}
                        onClick={() => setUpdate(c => !c)}>
                            Настройки
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

