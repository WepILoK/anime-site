import {combineReducers} from "redux";
import {animeListsReducer} from "./ducks/animeLists/reducer";
import {userReducer} from "./ducks/user/reducer";

export const rootReducer = combineReducers({
    animeLists: animeListsReducer,
    user: userReducer,
});