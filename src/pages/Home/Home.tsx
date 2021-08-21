import React from 'react';
import './Home.scss'


export const Home = () => {
    return (
        <div className='page__inner'>
            <div className='container'>
                <div className='container__left-side'>
                    <div className='section'>
                        <div className='section__body'>
                            <h2 className='title'>
                                Популярное аниме текущего сезона
                            </h2>
                            <div className='popular-list'>
                                {new Array(6).fill(1).map(item =>
                                    <div className='popular-list__item item'>
                                        <img className='item__image'
                                             src={require("../../assets/images/animeAvatar.png").default}/>
                                        <div className='item__name'>
                                            Место для названия аниме
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='info-lists'>
                        <div className='info-lists__section section'>
                            <div className='section__body'>
                                <div className='title'>
                                    Последние новости
                                </div>
                                <div className='info-list-items'>
                                    {new Array(4).fill(1).map(i =>
                                        <div className='info-list-item'>
                                            <div className='info-list-item__text text-cut'>
                                                Сайт закрыт на технические работы по причине долгого создания сайта
                                                16.08.2021
                                            </div>
                                            <div className='info-list-item__info'>
                                                <div className='info-list-item__user'>UserName</div>
                                                <div className='info-list-item__date'>16.08.2021</div>
                                            </div>
                                        </div>)}
                                </div>
                                <div className='link-default'>Все новости {">"}</div>
                            </div>
                        </div>
                        <div className='info-lists__section section'>
                            <div className='section__body'>
                                <div className='title'>
                                    Последние темы форума
                                </div>
                                <div className='info-list-items'>
                                    {new Array(4).fill(1).map(i =>
                                        <div className='info-list-item'>
                                            <div className='info-list-item__text text-cut'>
                                                Тема форума
                                            </div>
                                            <div className='info-list-item__info'>
                                                <div className='info-list-item__user'>UserName</div>
                                                <div className='info-list-item__date'>16.08.2021</div>
                                            </div>
                                        </div>)}
                                </div>
                                <div className='link-default'>Все темы {">"}</div>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='section__header'>
                            <div className='section__header-title'>
                                Новые серии
                            </div>
                        </div>
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
                </div>
                <div className='container__right-side aside'>
                    <div className='aside__panel'>
                        <div className='aside__title'>
                            Мини чат
                        </div>
                        <div className='chat'>
                            <div className='chat__items'>
                                {Array(15).fill('').map(i =>
                                    <div className='chat-item'>
                                        <div className='chat-item__header'>
                                            <div className='chat-item__avatar'>
                                                <img src={require("../../assets/images/avatar.png").default}
                                                     alt="UserAvatar"/>
                                                <div/>
                                            </div>
                                            <div className='chat-item__info'>
                                                <div className='chat-item__info_username text-cut'>
                                                    UserName
                                                </div>
                                                <div className='chat-item__info_date'>
                                                    около 2 часов назад
                                                </div>
                                            </div>
                                        </div>
                                        <div className='chat-item__message'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta
                                            itaque laudantium nemo nisi omnis, possimus velit veritatis voluptatibus.
                                            Aliquam animi beatae eveniet ipsa maxime recusandae sapiente sit, unde
                                            veritatis!
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='chat-send'>
                                <textarea className='chat-send__area'
                                          maxLength={250}
                                          placeholder='Введите сообщение'/>
                                <button className='chat-send__button'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='aside__panel'>
                        <div className='aside__title'>
                            Топ аниме
                        </div>
                        <div className='list'>
                            {new Array(10).fill('').map(i =>
                                <div className='anime-list-item'>
                                    <img className='anime-list-item__image'
                                         alt='animeAvatar'
                                         src={require("../../assets/images/animeAvatar.png").default}/>
                                    <div className='anime-list-item__body'>
                                        <div className='anime-list-item__title'>
                                            Название аниме
                                        </div>
                                        <div className='anime-list-item__subtitle'>
                                            Просмотров: {' ' + 414151141}
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
