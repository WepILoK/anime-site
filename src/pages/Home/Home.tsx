import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
    selectIsLoading,
    selectNewEpisodesList,
    selectPopularList,
    selectTopAnimeList
} from "../../store/ducks/animeLists/selectors";
import {PopularItems} from "./components/PopularItems";
import {NewEpisodesItems} from "./components/NewEpisodesItems";
import {TopAnimeItems} from "./components/TopAnimeItems";
import {fetchAnimeLists} from "../../store/ducks/animeLists/actionCreators";

import './Home.scss'


export const Home = () => {
    const dispatch = useDispatch()
    const popularList = useSelector(selectPopularList)
    const newEpisodesList = useSelector(selectNewEpisodesList)
    const topAnimeList = useSelector(selectTopAnimeList)
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(fetchAnimeLists())
    }, [])

    return (
        <div className='container'>
            <div className='container__left-side'>
                <div className='section'>
                    <div className='section__body'>
                        <div className='section__body-title'>
                            Популярное аниме текущего сезона
                        </div>
                        <div className='popular-list'>
                            <PopularItems items={popularList} isLoading={isLoading}/>
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
                            <NewEpisodesItems isLoading={isLoading} items={newEpisodesList}/>
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
                            <button className='mini-chat-send__button button'>
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
                        <TopAnimeItems items={topAnimeList} isLoading={isLoading}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
