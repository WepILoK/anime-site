import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Layout.scss'
import {AuthRoutes, HomeRoutes, UserRoutes} from "../../routes";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserData} from "../../store/ducks/user/selectors";
import {put} from "redux-saga/effects";
import {setIsAuth, setUserData, setUserStatus} from "../../store/ducks/user/actionCreators";
import {Status} from "../../store/ducks/user/contracts/state";

export const Layout: React.FC = ({children}) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const userData = useSelector(selectUserData)
    const [visibleNotifications, setVisibleNotifications] = useState(false)

    const toggleVisibleNotifications = () => {
        setVisibleNotifications(prev => !prev)
    }

    const logOut = () => {
        window.localStorage.removeItem('token')
        dispatch(setIsAuth(false))
        dispatch(setUserStatus(Status.NEVER))
        dispatch(setUserData(null))
    }

    return (
        <div className='layout'>
            <div className='header'>
                <div className='header__inner'>
                    <div className="header__logo">
                        <Link to='/'>
                            <img src={require("../../assets/images/anim-logo.png").default} alt='AnimLogo'/>
                        </Link>
                    </div>
                    <div className="header__menu menu">
                        <button className='menu__item button'>Каталог</button>
                        <button className='menu__item button'>Поиск</button>
                        <button className='menu__item button'>Форум</button>
                    </div>
                    <div className="header__user user">
                        {isAuth ? (
                            <>
                                <button className='user__image button'
                                        onClick={toggleVisibleNotifications}>
                                    <img src={require("../../assets/images/notifications.svg").default}
                                         alt='notifications'/>
                                    {userData && userData.notifications.length > 0 && (<p className='text-cut'>{userData.notifications.length}</p>)}
                                </button>
                                <Link to={UserRoutes.MESSAGES}>
                                    <button className='user__image button'>
                                        <img src={require("../../assets/images/message.svg").default} alt='messages'/>
                                        <p className='text-cut'>{3}</p>
                                    </button>
                                </Link>
                                {visibleNotifications && (
                                    <div className='user__dropdown'>
                                        <div className='notifications'>
                                            <div className='notifications__header'>
                                                <div className='notifications__title'>
                                                    Уведомления
                                                </div>
                                            </div>
                                            <div className='notifications__content'>
                                                {userData && userData.notifications.length
                                                    ? (<div className='notifications__list'>
                                                        {userData && userData.notifications.map(item =>
                                                            <div className='notification-row' key={item.id}>
                                                                <div className='notification-item'>
                                                                    <img className='notification-item__image'
                                                                         src={require(`../../assets/images/${item.avatar}`).default}/>
                                                                    <div className='notification-item__info'>
                                                                        <div className='notification-item__meta'>
                                                                            <div
                                                                                className='notification-item__command-name text-cut'>
                                                                                {item.translationTeam}
                                                                            </div>
                                                                            <div className='notification-item__date'>
                                                                                {item.addedAt}
                                                                            </div>
                                                                        </div>
                                                                        <div className='notification-item__body'>
                                                                            Новая {item.series} серия <br/>
                                                                            <div className='notification-item__text'>
                                                                                В аниме:
                                                                                <div className='notification-item__name text-cut'>
                                                                                    {item.name}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)}
                                                    </div>)
                                                    : (<div className='notifications__empty'>
                                                        Уведомлений нет
                                                    </div>)}
                                            </div>
                                            <div className='notifications__footer'>
                                                <Link to={UserRoutes.NOTIFICATIONS}>
                                                    <button className='notifications__button button'
                                                            onClick={() => setVisibleNotifications(false)}>
                                                        Все уведомления
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>)}
                                <div className='user__avatar'>
                                    <Link to={UserRoutes.PROFILE}>
                                        <img src={require("../../assets/images/avatar.png").default} alt='Avatar'/>
                                    </Link>
                                </div>
                                <div className='user__logout'>
                                    <button className='button' onClick={logOut}>
                                        Выйти
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='user__login'>
                                    <Link to={AuthRoutes.LOGIN}>
                                        <button className='button'>
                                            Войти
                                        </button>
                                    </Link>
                                    <Link to={AuthRoutes.REGISTRATION}>
                                        <button className='button'>
                                            Регистрация
                                        </button>
                                    </Link></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='page' onClick={() => setVisibleNotifications(false)}>
                <div className='page__inner'>
                    {children}
                </div>
            </div>
        </div>
    );
};
