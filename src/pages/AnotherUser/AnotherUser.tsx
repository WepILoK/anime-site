import React, {useEffect} from 'react';
import {Profile} from "../../components/Profile/Profile";
import './AnotherUser.scss'
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAnotherUserData, setAnotherUserData} from "../../store/ducks/anotherUser/actionCreators";
import {selectAnotherUserData} from "../../store/ducks/anotherUser/selectors";

export const AnotherUser = () => {
    const dispatch = useDispatch()
    const anotherUserData = useSelector(selectAnotherUserData)
    const params: {id: string} = useParams()
    useEffect( () => {
        dispatch(fetchAnotherUserData(params.id))
        return () => {
            dispatch(setAnotherUserData(null))
        }
    }, [])

    if (anotherUserData) {
        return (
            <div className='container'>
                <div className='container__left-side'>
                    <Profile {...anotherUserData}/>
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
    } else return null
};
