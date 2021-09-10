import React from 'react';
import {Link} from 'react-router-dom';
import {HomeRoutes} from "../../../routes";

interface MiniChatProps {

}

export const MiniChat: React.FC<MiniChatProps> = () => {
    return (
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
                                    <img src={require("../../../assets/images/avatar.png").default}
                                         alt="UserAvatar"/>
                                    <div/>
                                </div>
                                <div className='mini-chat-item__info'>
                                    <Link to={HomeRoutes.ANOTHER_USER + `${1}`}>
                                        <div className='mini-chat-item__info_username text-cut'>
                                            <div>UserName</div>
                                        </div>
                                    </Link>
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
    );
};