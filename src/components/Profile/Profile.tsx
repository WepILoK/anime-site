import React from 'react';
import './Profile.scss'
import {IUserData} from "../../store/ducks/user/contracts/state";
import {useSelector} from "react-redux";
import {selectUserData} from "../../store/ducks/user/selectors";
import {IAnotherUserData} from "../../store/ducks/anotherUser/contracts/state";
import { Link } from 'react-router-dom';
import {UserRoutes} from "../../routes";


export const Profile: React.FC<IUserData | IAnotherUserData> =
    ({
         userName, _id, twitter, vk,
         facebook, name, surname,
         age, city, country
     }) => {
        const userData = useSelector(selectUserData)


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
                                    {userName}
                                    <div className='online-marker'/>
                                </div>
                                <div className='profile__registration-date'>
                                    на сайте с 29 февраля 1999
                                </div>
                            </div>
                        </div>
                        {userData?._id !== _id && (
                            <div className='profile__header-right'>
                                <Link to={UserRoutes.MESSAGES + '/' + _id}>
                                    <button className='profile__button button'>
                                        Отправить сообщение
                                    </button>
                                </Link>
                                <div className='profile__button button'>Добавить в друзья</div>
                            </div>
                        )}
                    </div>
                    <div className='profile__body'>
                        <div className='profile__top'>
                            <div className='profile__top-left'>
                                <div className='profile__social-networks'>
                                    {vk?.length ? (<div className='social-network'>
                                            <div className='social-network__image'>
                                                <img src={require("../../assets/images/VK.svg").default}
                                                     alt='VK-icon'/>
                                            </div>
                                            <div className='social-network__url'>
                                                <a href={vk} target='_blank'>
                                                    Пользователь в VK
                                                </a>
                                            </div>
                                        </div>
                                    ) : null}
                                    {twitter?.length ? (
                                        <div className='social-network'>
                                            <div className='social-network__image'>
                                                <img src={require("../../assets/images/twitter.svg").default}
                                                     alt='Twitter-icon'/>
                                            </div>
                                            <div className='social-network__url'>
                                                <a href={twitter} target='_blank'>
                                                    Пользователь в Twitter
                                                </a>
                                            </div>
                                        </div>
                                    ) : null}
                                    {facebook?.length ? (
                                        <div className='social-network'>
                                            <div className='social-network__image'>
                                                <img src={require("../../assets/images/facebook.svg").default}
                                                     alt='Facebook-icon'/>
                                            </div>
                                            <div className='social-network__url'>
                                                <a href={facebook} target='_blank'>
                                                    Пользователь в Facebook
                                                </a>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='profile__top-right'>
                                <div className='info'>
                                    <div className='info__title'>
                                        <h3>Информация о пользователе</h3>
                                    </div>
                                    <div className='info__list'>
                                        {name?.length ? (<div className='info__item'>
                                            <h4>Имя:</h4>
                                            <span>{name}</span>
                                        </div>) : null}
                                        {surname?.length ? (<div className='info__item'>
                                            <h4>Фамилия:</h4>
                                            <span>{surname}</span>
                                        </div>) : null}
                                        {country?.length ? (<div className='info__item'>
                                            <h4>Страна:</h4>
                                            <span>{country}</span>
                                        </div>) : null}
                                        {city?.length ? (<div className='info__item'>
                                            <h4>Город:</h4>
                                            <span>{city}</span>
                                        </div>) : null}
                                        {age ? (<div className='info__item'>
                                            <h4>Возраст:</h4>
                                            <span>{age}</span>
                                        </div>) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

