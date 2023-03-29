import axios from 'axios';
import {BASE_URL, API_KEY} from "../config"

export class TVShowAPI {
    static async popularTVShows() {
        const res = await axios(`${BASE_URL}/tv/popular/${API_KEY}`)
        return res.data.results[0]
    }

}
