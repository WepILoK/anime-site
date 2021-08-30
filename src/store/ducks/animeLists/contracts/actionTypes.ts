import {Action} from "redux";
import {IAnimeListsState} from "./state";


export enum AnimeListsActionsType {
    SET_IS_LOADING = "animeList/SET_IS_LOADING",
    FETCH_ANIME_LISTS = "animeList/FETCH_ANIME_LISTS",
    SET_ANIME_LISTS = "animeList/SET_ANIME_LISTS",
    FETCH_ANIME_LIST = "animeList/FETCH_ANIME_LIST",
    SET_ANIME_LIST = "animeList/SET_ANIME_LIST",
    SET_NEW_EPISODES_LIST = "animeList/SET_NEW_EPISODES_LIST",
    SET_LIST_OF_POPULAR_THIS_SEASON = "animeList/SET_LIST_OF_POPULAR_THIS_SEASON",
    SET_TOP_ANIME_LIST = "animeList/SET_TOP_ANIME_LIST",
}

export interface ISetIsLoading extends Action<AnimeListsActionsType> {
    type: AnimeListsActionsType.SET_IS_LOADING
    payload: boolean
}

export interface IFetchAnimeLists extends Action<AnimeListsActionsType> {
    type: AnimeListsActionsType.FETCH_ANIME_LISTS
}

export interface ISetAnimeLists extends Action<AnimeListsActionsType> {
    type: AnimeListsActionsType.SET_ANIME_LISTS
    payload: {
        animeList: IAnimeListsState['animeList'],
        popularList: IAnimeListsState['popularList'],
        newEpisodesList: IAnimeListsState['newEpisodesList'],
        topAnimeList: IAnimeListsState['topAnimeList'],
    }
}

export type IAnimeListsActions =
    ISetIsLoading
    | IFetchAnimeLists
    | ISetAnimeLists

