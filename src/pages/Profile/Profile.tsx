import React from 'react';
import './Profile.scss'

export const Profile = () => {
    return (
        <div className='page__inner'>
            <div className='container'>
                <div className='container__left-side'>

                </div>
                <div className='container__right-side'>
                    <div className='section'>
                        <div className='section__header_right-side'>
                            Меню
                        </div>
                        <div className='navbar'>
                            <div className='navbar__item'>
                                Мой профиль
                            </div>
                            <div className='navbar__item'>
                                Сообщения
                            </div>
                            <div className='navbar__item'>
                                Друзья
                            </div>
                            <div className='navbar__item'>
                                Уведомления
                            </div>
                            <div className='navbar__item'>
                                Список аниме
                            </div>
                            <div className='navbar__item'>
                                Настройки
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

