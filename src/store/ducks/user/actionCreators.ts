import {
    IFetchSignIn, IFetchSignUp,
    IFetchUserData,
    ISetIsAuth,
    ISetUserData, ISetUserMessage,
    ISetUserStatus,
    UserActionsType
} from "./contracts/actionTypes";
import {IUserState} from "./contracts/state";
import {RegisterFormProps} from "../../../pages/Authorization/components/Register";
import {LoginFormProps} from "../../../pages/Authorization/components/Login";


export const setIsAuth = (payload: boolean): ISetIsAuth => ({
    type: UserActionsType.SET_IS_AUTH,
    payload
});

export const fetchSignIn = (payload: LoginFormProps): IFetchSignIn => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
});

export const fetchSignUp = (payload: RegisterFormProps): IFetchSignUp => ({
    type: UserActionsType.FETCH_SIGN_UP,
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

export const setUserMessage = (payload: IUserState['message']): ISetUserMessage => ({
    type: UserActionsType.SET_USER_MESSAGE,
    payload
})

