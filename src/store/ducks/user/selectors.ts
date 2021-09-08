import {RootState} from "../../store";
import {IUserData, IUserState, Status} from "./contracts/state";


export const selectUserState = (state: RootState): IUserState => state.user

export const selectUserData = (state: RootState):IUserState['user'] =>
    selectUserState(state).user

export const selectUserStatus = (state: RootState): IUserState['status'] =>
    selectUserState(state).status

export const selectIsAuth = (state: RootState): IUserState['isAuth'] =>
    selectUserState(state).isAuth

export const selectUserMessage = (state: RootState): IUserState['message'] =>
    selectUserState(state).message
