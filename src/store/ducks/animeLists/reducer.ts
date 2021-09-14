import produce, {Draft} from "immer";

import {AnimeListsActionsType, IAnimeListsActions} from "./contracts/actionTypes";
import {IAnimeListsState} from "./contracts/state";


const initialState: IAnimeListsState = {
    animeList: [],
    newEpisodesList: [],
    popularList: [],
    topAnimeList: [],
    isLoading: true
}

export const animeListsReducer = produce((draft: Draft<IAnimeListsState>, action: IAnimeListsActions) => {
    switch (action.type) {
        case AnimeListsActionsType.SET_IS_LOADING:
            draft.isLoading = action.payload
            break;
        case AnimeListsActionsType.SET_ANIME_LISTS:
            draft.animeList = action.payload.animeList
            draft.popularList = action.payload.popularList
            draft.newEpisodesList = action.payload.newEpisodesList
            draft.topAnimeList = action.payload.topAnimeList
            break;
        default:
            break;
    }
}, initialState)