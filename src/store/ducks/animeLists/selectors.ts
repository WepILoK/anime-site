import {RootState} from "../../store";
import {IAnimeListsState} from "./contracts/state";

export const selectAnimeListsState = (state: RootState): IAnimeListsState => state.animeLists

export const selectAnimeList = (state: RootState): IAnimeListsState['animeList'] =>
    selectAnimeListsState(state).animeList

export const selectPopularList = (state: RootState): IAnimeListsState['popularList'] =>
    selectAnimeListsState(state).popularList

export const selectNewEpisodesList = (state: RootState): IAnimeListsState['newEpisodesList'] =>
    selectAnimeListsState(state).newEpisodesList

export const selectTopAnimeList = (state: RootState): IAnimeListsState['topAnimeList'] =>
    selectAnimeListsState(state).topAnimeList
