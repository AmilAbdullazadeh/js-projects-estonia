import { useEffect, useState } from "react";

//Components
import { Logo } from "./components/Logo"
import {TVShowDetail} from "./components/TVShowDetail";

import { TVShowAPI } from "./api/tv-shows";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config"

//Img
import logImg from "./assets/img/Screen Shot 2023-03-29 at 17.54.26.png"


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState([]);

  async function fetchTVShows() {
    try {
      const res = await TVShowAPI.popularTVShows()
      setCurrentTVShow(res)
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
             url("${BACKDROP_BASE_URL}${currentTVShow?.backdrop_path}") no-repeat center / cover`
                : "black",
          }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo title='8K Movies' subtitle='8k Movies' img={logImg} />
            </div>
            <div className="col-md-12 col-lg-4">
            {/* Search */}
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
          {
            currentTVShow && <TVShowDetail
                title={currentTVShow.name}
                overview={currentTVShow.overview}
                vote_average={currentTVShow.vote_average}
            />
          }
        </div>
        <div className={s.recommended_shows}>
          {/*TVShowList*/}
        </div>
      </div>
  );
}
