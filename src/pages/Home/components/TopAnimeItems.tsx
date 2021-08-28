import React from 'react';
import ContentLoader from "react-content-loader";

import {IAnimeListsState} from "../../../store/ducks/animeLists/contracts/state";


interface TopAnimeListProps {
    items: IAnimeListsState['topAnimeList']
    isLoading: boolean
}

export const TopAnimeItems: React.FC<TopAnimeListProps> = ({isLoading, items}) => {
    if (isLoading) {
        return (
            <>
                {Array(10).fill('').map((_, index) =>
                    <ContentLoader
                        key={index}
                        speed={2}
                        width={265}
                        height={125}
                        viewBox="0 0 265 125"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="0" y="10" rx="3" ry="3" width="70" height="105" />
                        <rect x="86" y="10" rx="3" ry="3" width="150" height="21" />
                        <rect x="86" y="41" rx="3" ry="3" width="150" height="10" />
                        <rect x="0" y="124" rx="0" ry="0" width="265" height="1" />
                    </ContentLoader>)}
            </>
        )
    } else {
        return (
            <>
                {items.map(item =>
                    <div className='anime-list-item' key={item.id}>
                        <img className='anime-list-item__image'
                             alt='animeAvatar'
                             src={require(`../../../assets/images/${item.avatar}`).default}/>
                        <div className='anime-list-item__body'>
                            <div className='anime-list-item__title'>
                                {item.name}
                            </div>
                            <div className='anime-list-item__subtitle'>
                                Просмотров: {' ' + item.views}
                            </div>
                        </div>
                    </div>)}
            </>
        );
    }
};