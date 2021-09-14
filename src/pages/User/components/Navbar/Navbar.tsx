import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
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
                    <NavLink className='navbar__item'
                             activeClassName="active"
                             to={UserRoutes.PROFILE}>
                        <div>
                            Мой профиль
                        </div>
                    </NavLink>
                    <NavLink className='navbar__item'
                             activeClassName="active"
                             to={UserRoutes.MESSAGES}>
                        <div>
                            Сообщения
                        </div>
                    </NavLink>
                    <NavLink className='navbar__item'
                             activeClassName="active"
                             to={UserRoutes.FRIENDS}>
                        <div>
                            Друзья
                        </div>
                    </NavLink>
                    <NavLink className='navbar__item'
                             activeClassName="active"
                             to={UserRoutes.NOTIFICATIONS}>
                        <div>
                            Уведомления
                        </div>
                    </NavLink>
                    <NavLink className='navbar__item'
                             activeClassName="active"
                             to={UserRoutes.ANIME_LIST}>
                        <div>
                            Список аниме
                        </div>
                    </NavLink>
                    <NavLink className='navbar__item'
                             activeClassName="active"
                             to={UserRoutes.SETTINGS}>
                        <div>
                            Настройки
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

