import React from 'react';
import './Chat.scss'

export const Chat = () => {
    const arr = [1, 2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1]

    return (
        <div className='section'>
            <div className='chat'>
                <div className='chat__users'>
                    <div className='users-list'>
                        {Array(10).fill('').map(i =>
                            <div className='user'>
                                <div className='user__header'>
                                    <div className='user__avatar'>
                                        <img src={require("../../../../assets/images/avatar.png").default}
                                             alt='Avatar'/>
                                        <div className='online-marker'/>
                                    </div>
                                    <div className='user__name text-cut'>
                                        User NameUser NameUser NameUser NameUser Name
                                    </div>
                                </div>
                                <div className='user__message text-cut'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi consequuntur
                                    doloremque fugiat ipsa ipsam minima molestiae natus nemo nihil nulla, officiis
                                    quaerat quo repellat saepe vel, vitae voluptatem voluptatibus.
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className='chat__messages'>
                    <div className='messages'>
                        <div className='messages__author'>
                            <h4 className='text-cut'>
                                User Name User Name User Name User Name User Name User Name User Name User Name User
                                Name User Name
                            </h4>
                        </div>
                        <div className='messages__list'>
                            {arr.map(i =>
                                i === 1 ? (
                                    <div className='message'>
                                        <div className='message__bubble user'>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi consequuntur
                                                doloremque fugiat ipsa ipsam minima molestiae natus nemo nihil nulla, officiis
                                                quaerat quo repellat saepe vel, vitae voluptatem voluptatibus.
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='message'>
                                        <div className='message__bubble another-user'>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi consequuntur
                                                doloremque fugiat ipsa ipsam minima molestiae natus nemo nihil nulla, officiis
                                                quaerat quo repellat saepe vel, vitae voluptatem voluptatibus.
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
                </div>
            </div>
        </div>
    );
};

