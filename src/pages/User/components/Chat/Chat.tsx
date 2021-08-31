import React from 'react';
import './Chat.scss'
import {useSelector} from "react-redux";
import {selectUserData} from "../../../../store/ducks/user/selectors";
import {Link, Route, useParams} from 'react-router-dom';
import {UserRoutes} from "../../../../routes";

export const Chat = () => {
    const chats = useSelector(selectUserData).chats
    const arr = [1, 2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1]

    return (
        <div className='section'>
            <div className='chat'>
                <div className='chat__users'>
                    <div className='users-list'>
                        {chats.map(item =>
                            <Link to={UserRoutes.MESSAGES + `/${item.id}`} key={item.id}>
                                <div className='user'>
                                    <div className='user__header'>
                                        <div className='user__avatar'>
                                            <img src={require(`../../../../assets/images/${item.avatar}`).default}
                                                 alt='Avatar'/>
                                            <div className='online-marker'/>
                                        </div>
                                        <div className='user__name text-cut'>
                                            {item.userName}
                                        </div>
                                    </div>
                                    <div className='user__message text-cut'>
                                        {item.messages[item.messages.length - 1].message}
                                    </div>
                                </div>
                            </Link>)}
                    </div>
                </div>
                <div className='chat__messages'>
                        <Route path={UserRoutes.MESSAGES + '/:id'}>
                            <Messages/>
                        </Route>

                </div>
            </div>
        </div>
    );
};

const Messages = () => {
    const {chats, id}= useSelector(selectUserData)
    const params: { id: string } = useParams();
    const chat = chats.filter(item => item.id === +params.id);
    return (
        <div className='messages'>
            <div className='messages__author'>
                <h4 className='text-cut'>
                    {chat[0].userName}
                </h4>
            </div>
            <div className='messages__list'>
                {chat[0].messages.map(item =>
                    item.id === id ? (
                        <div className='message'>
                            <div className='message__bubble user'>
                                <span>
                                    {item.message}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className='message'>
                            <div className='message__bubble another-user'>
                                <span>
                                    {item.message}
                                </span>
                            </div>
                        </div>
                    )
                )}
            </div>
            <div className='messages__send-area'>
                <textarea placeholder='Введите ваше сообщение...' maxLength={250}/>
                <img src={require("../../../../assets/images/send_black_24dp.svg").default}
                     alt='SendIcon'/>
            </div>
        </div>
    )
}