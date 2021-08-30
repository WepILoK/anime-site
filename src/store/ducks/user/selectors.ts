import {RootState} from "../../store";
import {IUserState, Status} from "./contracts/state";


export const selectUserState = (state: RootState): IUserState => state.user

export const selectUserData = (state: RootState): IUserState['user'] =>
    selectUserState(state).user

export const selectUserStatus = (state: RootState): boolean =>
    selectUserState(state).status === Status.ERROR

export const selectIsAuth = (state: RootState): IUserState['isAuth'] =>
    selectUserState(state).isAuth
