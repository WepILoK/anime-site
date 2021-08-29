import React from 'react';
import ContentLoader from "react-content-loader";

import {formatDate} from "../../../utils/formatDate";
import {IAnimeListsState} from "../../../store/ducks/animeLists/contracts/state";


interface NewEpisodesListProps {
    items: IAnimeListsState['newEpisodesList']
    isLoading: boolean
}

export const NewEpisodesItems: React.FC<NewEpisodesListProps> = ({isLoading, items}) => {
    if (isLoading) {
        return (
            <>
                {Array(10).fill('').map((_, index )=>
                    <ContentLoader
                        key={index}
                        speed={2}
                        width={832}
                        height={171}
                        viewBox="0 0 832 171"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="0" y="0" rx="3" ry="3" width="100" height="150"/>
                        <rect x="116" y="0" rx="3" ry="3" width="716" height="30"/>
                        <rect x="116" y="40" rx="3" ry="3" width="150" height="26"/>
                        <rect x="0" y="161" rx="0" ry="0" width="832" height="1"/>
                    </ContentLoader>)}
            </>
        )
    } else {
        return (
            <>
                {items.map(item =>
                    <div className='updates__item' key={'_' + item.id}>
                        <img className='updates__avatar'
                             src={require(`../../../assets/images/${item.avatar}`).default}/>
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
                                        {item.series + ' серия'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
};