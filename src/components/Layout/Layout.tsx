import React, {useEffect, useState} from 'react';
import './Layout.scss'

export const Layout: React.FC = ({children}) => {
    const [visibleUser, setVisibleUser] = useState(false)
    const [visibleNotifications, setVisibleNotifications] = useState(false)

    const toggleVisibleNotifications = () => {
        setVisibleNotifications(prev => !prev)
    }

    return (
        <div className='layout'>
            <div className='header'>
                <div className='header__inner'>
                    <div className="header__logo">
                        <img src={require("../../assets/images/anim-logo.png").default} alt='AnimLogo'/>
                    </div>
                    <div className="header__menu menu">
                        <div className='menu__item hover'>Каталог</div>
                        <div className='menu__item hover'>Поиск</div>
                        <div className='menu__item hover'>Форум</div>
                    </div>
                    <div className="header__user user">
                        <div className='user__name text-cut'>
                            NAme
                        </div>
                        <div className='user__notifications hover'
                             onClick={toggleVisibleNotifications}>
                            <img src={require("../../assets/images/notifications.svg").default} alt='notifications'/>
                            <p>{2}</p>
                        </div>
                        {visibleNotifications && (
                            <div className='user__dropdown'>
                                <div className='notifications'>
                                    <div className='notifications__header'>
                                        <div className='notifications__title'>
                                            Уведомления
                                        </div>
                                    </div>
                                    <div className='notifications__content'>
                                        {false
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
                                                                            Название аниме Название аниме Название аниме
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
                                        <div className='notifications__button hover'>
                                            Все уведомления
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        <div className='user__avatar'>
                            <img src={require("../../assets/images/avatar.png").default} alt='Avatar'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page' onClick={() => setVisibleNotifications(false)}>
                {children}
            </div>
        </div>
    );
};

