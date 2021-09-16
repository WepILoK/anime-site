import {
    ISetAnotherUserData,
    AnotherUserActionsType, IFetchAnotherUserData, ISetAnotherUserStatus
} from "./contracts/actionTypes";
import {IAnotherUserState} from "./contracts/state";


export const fetchAnotherUserData = (payload: string): IFetchAnotherUserData => ({
    type: AnotherUserActionsType.FETCH_ANOTHER_USER_DATA,
    payload
});

export const setAnotherUserData = (payload: IAnotherUserState['anotherUser']): ISetAnotherUserData => ({
    type: AnotherUserActionsType.SET_ANOTHER_USER_DATA,
    payload
})

export const setAnotherUserStatus = (payload: IAnotherUserState['status']): ISetAnotherUserStatus => ({
    type: AnotherUserActionsType.SET_ANOTHER_USER_STATUS,
    payload
})
