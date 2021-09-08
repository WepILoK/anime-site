import axios from "axios";

export const AnimeApi = {
    async fetchAnimeList() {
        const {data} = await axios.get('http://localhost:3001/animeList')
        return data
    },
    async fetchNewEpisodesList() {
        const {data} = await axios.get('http://localhost:3001/newEpisodes')
        return data
    },
    async fetchPopularList() {
        const {data} = await axios.get('http://localhost:3001/popularList')
        return data
    },
    async fetchTopAnimeList() {
        const {data} = await axios.get('http://localhost:3001/animeList?_sort=views&_order=desc&_limit=10')
        return data
    },
}