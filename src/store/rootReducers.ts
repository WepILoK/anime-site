import {combineReducers} from "redux";
import {animeListsReducer} from "./ducks/animeLists/reducer";

export const rootReducer = combineReducers({
    animeLists: animeListsReducer,
});