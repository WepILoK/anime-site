import React from 'react';
// import format from "date-fns/format";
// import ruLang from "date-fns/locale/ru";
import './Home.scss'
import {useSelector} from "react-redux";
import {selectNewEpisodesList, selectPopularList, selectTopAnimeList} from "../../store/ducks/animeLists/selectors";
import {formatDate} from "../../utils/formatDate";


export const Home = () => {
    const popularList = useSelector(selectPopularList)
    const newEpisodesList = useSelector(selectNewEpisodesList)
    const topAnimeList = useSelector(selectTopAnimeList)


    return (
        <div className='page__inner'>
            <div className='container'>
                <div className='container__left-side'>
                    <div className='section'>
                        <div className='section__body'>
                            <div className='section__body-title'>
                                Популярное аниме текущего сезона
                            </div>
                            <div className='popular-list'>
                                {popularList.map(item =>
                                    <div className='popular-list__item item' key={item.id}>
                                        <img className='item__image'
                                             src={require(`../../assets/images/${item.avatar}`).default}/>
                                        <div className='item__name'>
                                            {item.name}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='info-lists'>
                        <div className='info-lists__section section'>
                            <div className='section__body'>
                                <div className='section__body-title'>
                                    Последние новости
                                </div>
                                <div className='info-list-items'>
                                    {new Array(4).fill(1).map(i =>
                                        <div className='info-list-item'>
                                            <div className='info-list-item__text text-cut'>
                                                Сайт закрыт на технические работы по причине долгого создания сайта
                                                16.08.2021
                                            </div>
                                            <div className='info-list-item__user-info'>
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
                                <div className='section__body-title'>
                                    Последние темы форума
                                </div>
                                <div className='info-list-items'>
                                    {new Array(4).fill(1).map(i =>
                                        <div className='info-list-item'>
                                            <div className='info-list-item__text text-cut'>
                                                Тема форума
                                            </div>
                                            <div className='info-list-item__user-info'>
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
                        <div className='section__header_left-side'>
                                Новые серии
                        </div>
                        <div className='section__body'>
                            <div className='updates'>
                                {newEpisodesList.map(item =>
                                    <div className='updates__item' key={'_' + item.id}>
                                        <img className='updates__avatar'
                                             src={require(`../../assets/images/${item.avatar}`).default}/>
                                        <div className='updates__content'>
                                            <div className='updates__header'>
                                                <div className='updates__name'>
                                                    {item.name}
                                                </div>
                                                <div className='updates__date'>
                                                    {formatDate(new Date(item.addedAt))}
                                                </div>
                                            </div>
                                            <div className='updates__body'>
                                                <div className='updates__series'>
                                                    <div className='updates__series_number'>
                                                        {item.series}
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
                <div className='container__right-side'>
                    <div className='section'>
                        <div className='section__header_right-side'>
                            Мини чат
                        </div>
                        <div className='mini-chat'>
                            <div className='mini-chat__items'>
                                {Array(15).fill('').map(i =>
                                    <div className='mini-chat-item'>
                                        <div className='mini-chat-item__header'>
                                            <div className='mini-chat-item__avatar'>
                                                <img src={require("../../assets/images/avatar.png").default}
                                                     alt="UserAvatar"/>
                                                <div/>
                                            </div>
                                            <div className='mini-chat-item__info'>
                                                <div className='mini-chat-item__info_username text-cut'>
                                                    UserName
                                                </div>
                                                <div className='mini-chat-item__info_date'>
                                                    около 2 часов назад
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mini-chat-item__message'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta
                                            itaque laudantium nemo nisi omnis, possimus velit veritatis voluptatibus.
                                            Aliquam animi beatae eveniet ipsa maxime recusandae sapiente sit, unde
                                            veritatis!
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='mini-chat-send'>
                                <textarea className='mini-chat-send__area'
                                          maxLength={250}
                                          placeholder='Введите сообщение'/>
                                <button className='mini-chat-send__button'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='section__header_right-side'>
                            Топ аниме
                        </div>
                        <div className='list'>
                            {topAnimeList.map(item =>
                                <div className='anime-list-item'>
                                    <img className='anime-list-item__image'
                                         alt='animeAvatar'
                                         src={require(`../../assets/images/${item.avatar}`).default}/>
                                    <div className='anime-list-item__body'>
                                        <div className='anime-list-item__title'>
                                            {item.name}
                                        </div>
                                        <div className='anime-list-item__subtitle'>
                                            Просмотров: {' ' + item.views}
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
