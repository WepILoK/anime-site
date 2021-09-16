import {RootState} from "../../store";
import {IAnotherUserState} from "./contracts/state";


export const selectAnotherUserState = (state: RootState): IAnotherUserState => state.anotherUser

export const selectAnotherUserData = (state: RootState):IAnotherUserState['anotherUser'] =>
    selectAnotherUserState(state).anotherUser

