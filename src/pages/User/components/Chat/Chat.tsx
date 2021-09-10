import React, {useEffect} from 'react';
import './Chat.scss'
import {useSelector} from "react-redux";
import {selectUserData} from "../../../../store/ducks/user/selectors";
import {Link, Route, useParams} from 'react-router-dom';
import {HomeRoutes, UserRoutes} from "../../../../routes";
import {IUserData, IUserState} from "../../../../store/ducks/user/contracts/state";

export const Chat = () => {
    const userData = useSelector(selectUserData)
    const chats = [
        {
            id: '1',
            userName: "ZayacDmitry",
            avatar: "avatar.png",
            messages: [
                {
                    id: userData?._id || '0',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                },
                {
                    id: '1',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                },
                {
                    id: '1',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                },
                {
                    id: userData?._id || '0',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                }
            ]
        },
        {
            id: '2',
            userName: "ZayacDmitry",
            avatar: "avatar.png",
            messages: [
                {
                    id: userData?._id || '0',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                },
                {
                    id: '1',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                },
                {
                    id: '1',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                },
                {
                    id: userData?._id || '0',
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore dolorum eius est fugit illo, iure, modi, nam nihil quisquam reiciendis sit tempora totam unde velit vero voluptas voluptatem voluptatum!"
                }
            ]
        }
    ]

    if (userData) {
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
                            <Messages chats={chats} id={userData._id}/>
                        </Route>
                    </div>
                </div>
            </div>
        );
    } else return null
};

interface MessagesProps {
    chats: IUserData['chats']
    id: string
}

const Messages: React.FC<MessagesProps> = ({chats,id}) => {
    const params: { id: string } = useParams();
    const chat = chats.filter(item => item.id === params.id);

    return (
        <div className='messages'>
            <Link to={HomeRoutes.ANOTHER_USER + `${params.id}`}>
                <div className='messages__author'>
                    <h4 className='text-cut'>
                        {chat[0].userName}
                    </h4>
                </div>
            </Link>
            <div className='messages__list'>
                {chat[0].messages.map((item, index) =>
                    item.id === id ? (
                        <div className='message' key={item.id + `_${index}`}>
                            <div className='message__bubble user'>
                                <span>
                                    {item.message}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className='message' key={item.id + `_${index}`}>
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