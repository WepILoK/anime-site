import produce, {Draft} from "immer";
import {IUserState, Status} from "./contracts/state";
import {IUserActions, UserActionsType} from "./contracts/actionTypes";


const initialState: IUserState = {
    isAuth: false,
    user: null as IUserState['user'],
    status: Status.NEVER
}

export const userReducer = produce((draft: Draft<IUserState>, action: IUserActions) => {
    switch (action.type) {
        case UserActionsType.SET_IS_AUTH:
            draft.isAuth = action.payload
            break;
        case UserActionsType.SET_USER_STATUS:
            draft.status = action.payload
            break;
        case UserActionsType.SET_USER_DATA:
            draft.user = action.payload
            break;
        default:
            break;
    }
}, initialState)