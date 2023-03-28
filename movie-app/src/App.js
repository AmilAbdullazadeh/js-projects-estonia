import { useEffect, useState } from "react";
import axios from 'axios';
// import { TVShowAPI } from "./api/tv-shows";
import s from "./style.module.css";
import {BASE_URL, API_KEY, BACKDROP_BASE_URL} from "./config"

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState([]);

  async function fetchTVShows() {
    try {
      const res = await axios(`${BASE_URL}/tv/popular/${API_KEY}`)
      setCurrentTVShow(res.data.results[0])
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTVShows()
  }, [])

  return (
      <div
          className={s.main_container}
          style={{
            background: currentTVShow
                ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                : "black",
          }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
            </div>
            <div className="col-md-12 col-lg-4">
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
        </div>
        <div className={s.recommended_shows}>
        </div>
      </div>
  );
}
