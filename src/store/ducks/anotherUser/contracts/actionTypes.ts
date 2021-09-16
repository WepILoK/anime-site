import {Action} from "redux";
import {IAnotherUserState} from "./state";


export enum AnotherUserActionsType {
    SET_ANOTHER_USER_DATA = 'anotherUser/SET_ANOTHER_USER_DATA',
    FETCH_ANOTHER_USER_DATA = 'anotherUser/FETCH_ANOTHER_USER_DATA',
    SET_ANOTHER_USER_STATUS = 'anotherUser/SET_ANOTHER_USER_STATUS',
}

export interface IFetchAnotherUserData extends Action<AnotherUserActionsType> {
    type: AnotherUserActionsType.FETCH_ANOTHER_USER_DATA
    payload: string
}

export interface ISetAnotherUserData extends Action<AnotherUserActionsType> {
    type: AnotherUserActionsType.SET_ANOTHER_USER_DATA
    payload: IAnotherUserState['anotherUser']
}

export interface ISetAnotherUserStatus extends Action<AnotherUserActionsType> {
    type: AnotherUserActionsType.SET_ANOTHER_USER_STATUS
    payload: IAnotherUserState['status']
}


export type IAnotherUserActions =
    IFetchAnotherUserData
    | ISetAnotherUserData
    | ISetAnotherUserStatus


