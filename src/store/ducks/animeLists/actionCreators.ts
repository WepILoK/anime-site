import {ActionsType, IFetchAnimeLists, ISetAnimeLists, ISetIsLoading} from "./contracts/actionTypes";
import {IAnimeListsState} from "./contracts/state";

export const setIsLoading = (payload: boolean): ISetIsLoading => ({
    type: ActionsType.SET_IS_LOADING,
    payload
});

export const fetchAnimeLists = (): IFetchAnimeLists => ({
    type: ActionsType.FETCH_ANIME_LISTS
})

export const setAnimeLists = (payload: {
    animeList: IAnimeListsState['animeList'],
    popularList: IAnimeListsState['popularList'],
    newEpisodesList: IAnimeListsState['newEpisodesList'],
    topAnimeList: IAnimeListsState['topAnimeList'],
}): ISetAnimeLists => ({
    type: ActionsType.SET_ANIME_LISTS,
    payload
})

