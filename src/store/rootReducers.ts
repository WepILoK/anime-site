import {combineReducers} from "redux";
import {animeListsReducer} from "./ducks/animeLists/reducer";
import {userReducer} from "./ducks/user/reducer";
import {anotherUserReducer} from "./ducks/anotherUser/reducer";

export const rootReducer = combineReducers({
    animeLists: animeListsReducer,
    user: userReducer,
    anotherUser: anotherUserReducer,
});