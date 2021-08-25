import React from 'react';
import './Profile.scss'


export const Profile = () => {
    return (
        <div className='profile'>
            <div className='section'>
                <div className='profile__header'>
                    <div className='profile__header-left'>
                        <div className='profile__avatar'>
                            <img src={require("../../assets/images/avatar.png").default} alt='Avatar'/>
                        </div>
                        <div className='profile__name-date'>
                            <div className='profile__name'>
                                User Name
                                <div className='online-marker'/>
                            </div>
                            <div className='profile__registration-date'>
                                на сайте с 29 февраля 1999
                            </div>
                        </div>
                    </div>
                    <div className='profile__header-right'>
                        <div className='profile__button button'>Отправить сообщение</div>
                        <div className='profile__button button'>Добавить в друзья</div>
                    </div>
                </div>
                <div className='profile__body'>
                    <div className='profile__top'>
                        <div className='profile__top-left'>
                            <div className='profile__social-networks'>
                                <div className='social-network'>
                                    <div className='social-network__image'>
                                        <img src={require("../../assets/images/VK.svg").default}
                                             alt='VK-icon'/>
                                    </div>
                                    <div className='social-network__url'>
                                        <a href='https://vk.com' target='_blank'>Пользователь в VK</a>
                                    </div>
                                </div>
                                <div className='social-network'>
                                    <div className='social-network__image'>
                                        <img src={require("../../assets/images/twitter.svg").default}
                                             alt='Twitter-icon'/>
                                    </div>
                                    <div className='social-network__url'>
                                        <a href='https://vk.com' target='_blank'>Пользователь в Twitter</a>
                                    </div>
                                </div>
                                <div className='social-network'>
                                    <div className='social-network__image'>
                                        <img src={require("../../assets/images/facebook.svg").default}
                                             alt='Facebook-icon'/>
                                    </div>
                                    <div className='social-network__url'>
                                        <a href='https://vk.com' target='_blank'>Пользователь в Facebook</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='profile__top-right'>
                            <div className='info'>
                                <div className='info__title'>
                                    <h3>Информация о пользователе</h3>
                                </div>
                                <div className='info__list'>
                                    <div className='info__item'>
                                        <h4>Имя:</h4>
                                        <span>Андрей</span>
                                    </div>
                                    <div className='info__item'>
                                        <h4>Фамилия:</h4>
                                        <span>Морозов</span>
                                    </div>
                                    <div className='info__item'>
                                        <h4>Страна:</h4>
                                        <span>Россия</span>
                                    </div>
                                    <div className='info__item'>
                                        <h4>Город:</h4>
                                        <span>Москва</span>
                                    </div>
                                    <div className='info__item'>
                                        <h4>Возраст:</h4>
                                        <span>25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

