import axios from 'axios';
import {BASE_URL, API_KEY} from "../config"

export class TVShowAPI {

    static async popularTVShows() {
        const res = await axios(`${BASE_URL}/tv/popular/${API_KEY}`)
        return res.data.results[0]
    }

    static async tvShowsRecommendations(tv_id) {
        const res = await axios(`${BASE_URL}/tv/${tv_id}/recommendations${API_KEY}`)
        return res.data.results.slice(0, 10)
    }

    static async tvShowsByTitle(title) {
        const res = await axios(`${BASE_URL}/search/tv${API_KEY}&query=${title}`)
        return res.data.results[0]
    }

}
