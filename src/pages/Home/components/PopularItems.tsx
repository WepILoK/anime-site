import React from 'react';
import ContentLoader from "react-content-loader";

import {IAnimeListsState} from "../../../store/ducks/animeLists/contracts/state";


interface PopularListItemProps {
    items: IAnimeListsState['popularList']
    isLoading: boolean
}

export const PopularItems: React.FC<PopularListItemProps> = ({items, isLoading}) => {
    if (isLoading) {
        return (
            <>
                {Array(6).fill('').map((_, index )=>
                    <ContentLoader
                        key={index}
                        speed={2}
                        width={141}
                        height={251.3}
                        viewBox="0 0 141 251.3"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="2" y="1" rx="3" ry="3" width="129" height="193"/>
                        <rect x="2" y="200" rx="3" ry="3" width="129" height="40"/>
                    </ContentLoader>)}
            </>
        )
    } else {
        return (
            <>
                {items.map(item =>
                    <div className='popular-list__item item' key={item.id}>
                        <img className='item__image'
                             src={require(`../../../assets/images/${item.avatar}`).default}/>
                        <div className='item__name'>
                            {item.name}
                        </div>
                    </div>)}
            </>
        );
    }
};