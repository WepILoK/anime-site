import {call, put, takeLatest} from "redux-saga/effects";
import {setIsLoading} from "./actionCreators";
import {ActionsType, } from "./contracts/actionTypes";
import {IAnimeListsState} from "./contracts/state";
import {AnimeApi} from "../../../api/anime-api";


export function* fetchAnimeLists() {
    try {
        yield put(setIsLoading(true))
        const animeList: IAnimeListsState['animeList'] = yield call(AnimeApi.fetchAnimeList)
        const newEpisodesList: IAnimeListsState['newEpisodesList'] = yield call(AnimeApi.fetchNewEpisodesList)
        const popularList: IAnimeListsState['popularList'] = yield call(AnimeApi.fetchPopularList)
        const topAnimeList: IAnimeListsState['animeList'] = yield call(AnimeApi.fetchTopAnimeList)
        yield put(setIsLoading(false))
    } catch (error) {
        new Error(error)
    }
}

export function* AnimeListsSaga() {
    yield takeLatest(ActionsType.FETCH_ANIME_LISTS, fetchAnimeLists)
}