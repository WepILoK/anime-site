import {
    IFetchSignIn,
    IFetchUserData,
    ISetIsAuth,
    ISetUserData,
    ISetUserStatus,
    UserActionsType
} from "./contracts/actionTypes";
import {IUserState} from "./contracts/state";


export const setIsAuth = (payload: boolean): ISetIsAuth => ({
    type: UserActionsType.SET_IS_AUTH,
    payload
});

export const fetchSignIn = (payload: any): IFetchSignIn => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
});

export const fetchUserData = (): IFetchUserData => ({
    type: UserActionsType.FETCH_USER_DATA
});

export const setUserData = (payload: IUserState['user']): ISetUserData => ({
    type: UserActionsType.SET_USER_DATA,
    payload
})

export const setUserStatus = (payload: IUserState['status']): ISetUserStatus => ({
    type: UserActionsType.SET_USER_STATUS,
    payload
})

