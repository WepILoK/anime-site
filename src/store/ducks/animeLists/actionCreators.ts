import {AnimeListsActionsType, IFetchAnimeLists, ISetAnimeLists, ISetIsLoading} from "./contracts/actionTypes";
import {IAnimeListsState} from "./contracts/state";

export const setIsLoading = (payload: boolean): ISetIsLoading => ({
    type: AnimeListsActionsType.SET_IS_LOADING,
    payload
});

export const fetchAnimeLists = (): IFetchAnimeLists => ({
    type: AnimeListsActionsType.FETCH_ANIME_LISTS
})

export const setAnimeLists = (payload: {
    animeList: IAnimeListsState['animeList'],
    popularList: IAnimeListsState['popularList'],
    newEpisodesList: IAnimeListsState['newEpisodesList'],
    topAnimeList: IAnimeListsState['topAnimeList'],
}): ISetAnimeLists => ({
    type: AnimeListsActionsType.SET_ANIME_LISTS,
    payload
})

