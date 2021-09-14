import axios from "axios";

const URL = 'https://6128f30f0e3482001777b24b.mockapi.io'

export const AnimeApi = {
    async fetchAnimeList() {
        const {data} = await axios.get(URL + '/animeList')
        return data
    },
    async fetchNewEpisodesList() {
        const {data} = await axios.get(URL + '/newEpisodes')
        return data
    },
    async fetchPopularList() {
        const {data} = await axios.get(URL + '/popularList')
        return data
    },
    async fetchTopAnimeList() {
        const {data} = await axios.get(URL + '/topAnimeList')
        return data
    },
}