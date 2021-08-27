import {ActionsType, IFetchAnimeLists, ISetIsLoading} from "./contracts/actionTypes";

export const setIsLoading = (payload: boolean): ISetIsLoading => ({
    type: ActionsType.SET_IS_LOADING,
    payload
});

export const fetchAnimeLists = (): IFetchAnimeLists => ({
    type: ActionsType.FETCH_ANIME_LISTS
})

