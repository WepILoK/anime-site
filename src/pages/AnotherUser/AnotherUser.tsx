import React from 'react';
import {Profile} from "../../components/Profile/Profile";

export const AnotherUser = () => {
    return (
        <div className='container'>
            <div className='container__left-side'>
                <Profile/>
            </div>
            <div className='container__right-side'>
                <div className=''>
                    <div className='section'>
                        <div className='section__header_right-side'>
                            Друзья
                        </div>
                        <div className='friends__list'>
                            <div className='friend'>
                                <img className='friend__avatar' src="" alt="Friend avatar"/>
                                <div className='friend__username'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
