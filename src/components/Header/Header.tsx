import React, {useState} from 'react';
import './Header.scss'

export const Header = () => {
    const [visibleUser, setVisibleUser] = useState(false)


    return (
        <div className='header'>
            <div className='header__inner'>
                <div className="header__logo">
                    <img src={require("../../assets/images/anim-logo.png").default} alt='AnimLogo'/>
                </div>
                <div className="header__menu menu">
                    <div className='menu__item'>Каталог</div>
                    <div className='menu__item'>Поиск</div>
                </div>
                <div className="header__user user">
                    <div className='user__notifications'>
                        <img src={require("../../assets/images/notifications.svg").default} alt='notifications'/>
                    </div>
                    <div className='user__name'>
                        NAme
                    </div>
                    <div className='user__avatar'>
                        <img src={require("../../assets/images/avatar.png").default} alt='Avatar'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

