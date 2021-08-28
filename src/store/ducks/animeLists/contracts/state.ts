export interface IAnimeItem {
    id: number
    avatar: string
    name: string
    views: number
    series: number[]
}

export interface IEpisodeItem {
    id: number
    animeId: number
    avatar: string
    name: string
    series: number
    addedAt: string
}

export interface IPopularItem {
    id: number
    avatar: string
    name: string
}

export interface IAnimeListsState {
    animeList: IAnimeItem[]
    newEpisodesList: IEpisodeItem[]
    popularList: IPopularItem[]
    topAnimeList: IAnimeItem[]
    isLoading: boolean
}