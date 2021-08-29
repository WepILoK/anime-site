import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Layout.scss'
import {HomeRoutes, UserRoutes} from "../../routes";

export const Layout: React.FC = ({children}) => {
    const [visibleNotifications, setVisibleNotifications] = useState(false)

    const toggleVisibleNotifications = () => {
        setVisibleNotifications(prev => !prev)
    }

    return (
        <div className='layout'>
            <div className='header'>
                <div className='header__inner'>
                    <div className="header__logo">
                        <Link to='/'>
                            <img src={require("../../assets/images/anim-logo.png").default} alt='AnimLogo'/>
                        </Link>
                    </div>
                    <div className="header__menu menu">
                        <div className='menu__item hover'>Каталог</div>
                        <div className='menu__item hover'>Поиск</div>
                        <div className='menu__item hover'>Форум</div>
                    </div>
                    <div className="header__user user">
                        {false ? (
                            <>
                                <div className='user__image hover'
                                     onClick={toggleVisibleNotifications}>
                                    <img src={require("../../assets/images/notifications.svg").default}
                                         alt='notifications'/>
                                    <p className='text-cut'>{23}</p>
                                </div>
                                <Link to={UserRoutes.MESSAGES}>
                                    <div className='user__image hover'>
                                        <img src={require("../../assets/images/message.svg").default} alt='messages'/>
                                        <p className='text-cut'>{3}</p>
                                    </div>
                                </Link>
                                {visibleNotifications && (
                                    <div className='user__dropdown'>
                                        <div className='notifications'>
                                            <div className='notifications__header'>
                                                <div className='notifications__title'>
                                                    Уведомления
                                                </div>
                                            </div>
                                            <div className='notifications__content'>
                                                {true
                                                    ? (<div className='notifications__list'>
                                                        {new Array(10).fill('').map(i =>
                                                            <div className='notification-row'>
                                                                <div className='notification-item'>
                                                                    <img className='notification-item__image'
                                                                         src={require("../../assets/images/animeAvatar.png").default}/>
                                                                    <div className='notification-item__info'>
                                                                        <div className='notification-item__meta'>
                                                                            <div
                                                                                className='notification-item__command-name text-cut'>
                                                                                Переводчик
                                                                            </div>
                                                                            <div className='notification-item__date'>
                                                                                около 1 часа назад
                                                                            </div>
                                                                        </div>
                                                                        <div className='notification-item__body'>
                                                                            Новая 1 серия <br/>
                                                                            <div className='notification-item__text'>
                                                                                В аниме:
                                                                                <div
                                                                                    className='notification-item__name text-cut'>
                                                                                    Название аниме Название аниме
                                                                                    Название аниме
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)}
                                                    </div>)
                                                    : (<div className='notifications__empty'>
                                                        Уведомлений нет
                                                    </div>)}
                                            </div>
                                            <div className='notifications__footer'>
                                                <Link to={UserRoutes.NOTIFICATIONS}>
                                                    <div className='notifications__button button'
                                                         onClick={() => setVisibleNotifications(false)}>
                                                        Все уведомления
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>)}
                                <div className='user__avatar'>
                                    <Link to={UserRoutes.PROFILE}>
                                        <img src={require("../../assets/images/avatar.png").default} alt='Avatar'/>
                                    </Link>
                                </div>
                                <div className='user__login hover'>
                                    Выйти
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to={HomeRoutes.LOGIN} className='user__login hover'>
                                    <div>
                                        Войти
                                    </div>
                                </Link>
                                <Link to={HomeRoutes.REGISTRATION} className='user__login hover'>
                                    <div>
                                        Регистрация
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='page' onClick={() => setVisibleNotifications(false)}>
                {children}
            </div>
        </div>
    );
};
