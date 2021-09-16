import produce, {Draft} from "immer";
import {IAnotherUserState, Status} from "./contracts/state";
import {AnotherUserActionsType, IAnotherUserActions} from "./contracts/actionTypes";


const initialState: IAnotherUserState = {
    status: Status.NEVER,
    anotherUser: null as IAnotherUserState['anotherUser']
}

export const anotherUserReducer = produce((draft: Draft<IAnotherUserState>, action: IAnotherUserActions) => {
    switch (action.type) {
        case AnotherUserActionsType.SET_ANOTHER_USER_DATA:
            draft.anotherUser = action.payload
            break;
        case AnotherUserActionsType.SET_ANOTHER_USER_STATUS:
            draft.status = action.payload
            break;
        default:
            break;
    }
}, initialState)