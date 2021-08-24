import React from 'react';
import './User.scss'
import {Link} from "react-router-dom";

export const User = () => {
    return (
        <div className='user'>
            <div className='section'>
                <div className='user__header'>
                    <div className='user__header_background'/>
                </div>
                <div className='user__body'>
                    <div className='user__top'>
                        <div className='user__top_left'>
                            <div className='user__avatar'>
                                <img src={require("../../assets/images/avatar.png").default} alt='Avatar'/>
                            </div>
                            <div className='user__social-networks'>
                                <div className='user__social-networks_vk'></div>
                                <div className='user__social-networks_facebook'></div>
                                <div className='user__social-networks_twitter'></div>
                            </div>
                        </div>
                        <div className='user__top_right'>
                            <div className=''>
                                <div className='user__name'>
                                    User Name
                                </div>
                                <div className='user__registration-date'>
                                    на сайте с 29 февраля 1999
                                </div>
                            </div>
                            <div className='user__status'>
                                <div className='status'>
                                    {true ? (
                                        <div className='status__online'/>
                                    ) : (
                                        <div className='status__offline'/>
                                    )}
                                </div>
                                <div className='user__status_text'>
                                    {true ? 'Сейчас на сайте' : 'Сейчас не на сайте'}
                                </div>
                            </div>
                            <div className='user__info'>
                                <div className='info'>
                                    <h6>Имя</h6>
                                    <span>Андрей</span>
                                </div>
                                <div className='info'>
                                    <h6>Фамилия</h6>
                                    <span>Морозов</span>
                                </div>
                                <div className='info'>
                                    <h6>Страна</h6>
                                    <span>Россия</span>
                                </div>
                                <div className='info'>
                                    <h6>Город</h6>
                                    <span>Москва</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user__bottom'>
                        <div className='user__'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

