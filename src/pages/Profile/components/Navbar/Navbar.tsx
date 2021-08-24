import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {ProfileRoutes} from "../../../../routes";



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
                    <Link to={ProfileRoutes.USER}>
                        <div className={'navbar__item' + addActiveClass(ProfileRoutes.USER)}
                        onClick={() => setUpdate(c => !c)}>
                            Мой профиль
                        </div>
                    </Link>
                    <Link to={ProfileRoutes.MESSAGES}>
                        <div className={'navbar__item' + addActiveClass(ProfileRoutes.MESSAGES)}
                        onClick={() => setUpdate(c => !c)}>
                            Сообщения
                        </div>
                    </Link>
                    <Link to={ProfileRoutes.FRIENDS}>
                        <div className={'navbar__item' + addActiveClass(ProfileRoutes.FRIENDS)}
                        onClick={() => setUpdate(c => !c)}>
                            Друзья
                        </div>
                    </Link>
                    <Link to={ProfileRoutes.NOTIFICATIONS}>
                        <div className={'navbar__item' + addActiveClass(ProfileRoutes.NOTIFICATIONS)}
                        onClick={() => setUpdate(c => !c)}>
                            Уведомления
                        </div>
                    </Link>
                    <Link to={ProfileRoutes.ANIME_LIST}>
                        <div className={'navbar__item' + addActiveClass(ProfileRoutes.ANIME_LIST)}
                        onClick={() => setUpdate(c => !c)}>
                            Список аниме
                        </div>
                    </Link>
                    <Link to={ProfileRoutes.SETTINGS}>
                        <div className={'navbar__item' + addActiveClass(ProfileRoutes.SETTINGS)}
                        onClick={() => setUpdate(c => !c)}>
                            Настройки
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

