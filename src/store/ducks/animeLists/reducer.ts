import produce, {Draft} from "immer";
import {ActionsType, IActions} from "./contracts/actionTypes";
import {IAnimeListsState} from "./contracts/state";

const initialState: IAnimeListsState = {
    animeList: [],
    newEpisodesList: [],
    popularList: [],
    topAnimeList: [],
    isLoading: false
}

export const animeListsReducer = produce((draft: Draft<IAnimeListsState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_IS_LOADING:
            draft.isLoading = action.payload
            break;
        case ActionsType.SET_ANIME_LISTS:
            draft.topAnimeList = action.payload.topAnimeList
            draft.animeList = action.payload.animeList
            draft.popularList = action.payload.popularList
            draft.newEpisodesList = action.payload.newEpisodesList
            break;
        default:
            break;
    }
}, initialState)