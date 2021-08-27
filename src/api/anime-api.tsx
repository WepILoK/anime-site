import axios from "axios";

export const AnimeApi = {
    async fetchAnimeList() {
        const {data} = await axios.get('/animeList')
        return data
    },
    async fetchNewEpisodesList() {
        const {data} = await axios.get('/newEpisodes')
        return data
    },
    async fetchPopularList() {
        const {data} = await axios.get('/popularList')
        return data
    },
    async fetchTopAnimeList() {
        const {data} = await axios.get('/animeList?_sort=views&_order=DESC?_limit=10')
        return data
    },
}