import React from 'react';
import {Route} from "react-router-dom";

export const Notifications = () => {
    return (
        <div className='section'>
            <div className='section__body'>
                <div className='updates'>
                    {new Array(15).fill('').map(i =>
                        <div className='updates__item'>
                            <img className='updates__avatar'
                                 src={require("../../../../assets/images/animeAvatar.png").default}/>
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
    );
};
