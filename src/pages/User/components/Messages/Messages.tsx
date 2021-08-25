import React from 'react';
import './Messages.scss'

export const Messages = () => {
    return (
        <div className='section'>
            <div className='messages'>
                <div className='messages__users'>
                    <div className='users-list'>
                        {Array(10).fill('').map(i =>
                            <div className='user'>
                                <div className='user__header'>
                                    <div className='user__avatar'>
                                        <img src={require("../../../../assets/images/avatar.png").default}
                                             alt='Avatar'/>
                                    </div>
                                    <div className='user__name'>
                                        User Name
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
                <div className='messages__items'></div>
            </div>
        </div>
    );
};

