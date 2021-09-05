import {Action} from "redux";
import {IUserState} from "./state";
import {RegisterFormProps} from "../../../../pages/Authorization/components/Register";
import {LoginFormProps} from "../../../../pages/Authorization/components/Login";


export enum UserActionsType {
    SET_IS_AUTH = "user/SET_IS_AUTH",
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    SET_USER_STATUS = 'user/SET_USER_STATUS',
    SET_USER_MESSAGE = 'user/SET_USER_MESSAGE',
}

export interface ISetIsAuth extends Action<UserActionsType> {
    type: UserActionsType.SET_IS_AUTH
    payload: boolean
}

export interface IFetchUserData extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_DATA
}

export interface IFetchSignIn extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN
    payload: LoginFormProps
}

export interface IFetchSignUp extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP
    payload: RegisterFormProps
}

export interface ISetUserData extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA
    payload: IUserState['user']
}

export interface ISetUserStatus extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_STATUS
    payload: IUserState['status']
}

export interface ISetUserMessage extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_MESSAGE
    payload: string
}


export type IUserActions =
    ISetIsAuth
    | IFetchSignIn
    | ISetUserData
    | ISetUserStatus
    | IFetchUserData
    | IFetchSignUp
    | ISetUserMessage


