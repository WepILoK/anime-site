import React from 'react';

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__inner'>
                <div className="header__logo">
                    <img src={require("../../assets/images/anim-logo.png").default} alt='AnimLogo'/>
                </div>
                <div className="header__menu">

                </div>
                <div className="header__user">

                </div>
            </div>
        </div>
    );
};

