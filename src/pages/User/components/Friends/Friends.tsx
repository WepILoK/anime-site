import React from 'react';
import './Friends.scss'
import {Link} from "react-router-dom";
import {UserRoutes} from "../../../../routes";


export const Friends = () => {
    return (
        <div className='section'>
            <div className='friends'>
                <div className="section__header_left-side">
                    <h3>
                        Друзья
                    </h3>
                </div>
                <div className='section__body'>
                    <div className='friends__list'>
                        {Array(10).fill('').map(item =>
                            <div className='friend'>
                                <img className='friend__avatar'
                                     src={require("../../../../assets/images/avatar.png").default}
                                     alt="Friend avatar"/>
                                <div className='online_marker'/>
                                <div className='friend__username text-cut'>UserName</div>
                                <div className='friend__buttons'>
                                    <Link to={UserRoutes.MESSAGES + `/${'6138d105d349ad00160efca9'}`}>
                                        <button className='button'>
                                            Отправить сообщение
                                        </button>
                                    </Link>
                                    <button className='button'>
                                        Удалить из друзей
                                    </button>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};
