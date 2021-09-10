import React from 'react';
import {Profile} from "../../components/Profile/Profile";
import './AnotherUser.scss'

export const AnotherUser = () => {
    return (
        <div className='container'>
            <div className='container__left-side'>
                {/*<Profile/>*/}
            </div>
            <div className='container__right-side'>
                <div className='friends'>
                    <div className='section'>
                        <div className='section__header_right-side'>
                            Друзья
                        </div>
                        <div className='friends__list'>
                            {Array(10).fill('').map(item =>
                                <div className='friend'>
                                    <img className='friend__avatar'
                                         src={require("../../assets/images/avatar.png").default}
                                         alt="Friend avatar"/>
                                    <div className='online-marker'/>
                                    <div className='friend__username text-cut'>UserName</div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
