import { useEffect, useState } from "react";

//Components
import { Logo } from "./components/Logo"
import { TVShowDetail } from "./components/TVShowDetail";
import { TVShowList } from "./components/TVShowList";
import { SearchBar } from "./components/Search";


import { TVShowAPI } from "./api/tv-shows";
import s from "./style.module.css";
import {BACKDROP_BASE_URL} from "./config"

//Img
import logoImg from "./assets/img/Screen Shot 2023-03-29 at 17.54.26.png"


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState([]);
  const [tvRecommendations, setTVRecommendations] = useState([])

  async function fetchTVShows() {
    try {
      const res = await TVShowAPI.popularTVShows()
      if (res.length !== 0) {
        setCurrentTVShow(res)
      }
    } catch(err) {
      console.log(err.status_message)
    }
  }

  async function fetchTVRecommendations(tv_id) {
    try {
      const res = await TVShowAPI.tvShowsRecommendations(tv_id)
      if (res.length !== 0) {
        setTVRecommendations(res)
      }
    } catch (err) {
      console.log(err.status_message)
    }
  }

  function updateTVShow(TVShow) {
    setCurrentTVShow(TVShow)
  }

  async function fetchByTitle(title) {
    try {
      const res = await TVShowAPI.tvShowsByTitle(title)
      if (res.length !== 0) {
        setCurrentTVShow(res)
      }
    } catch (err) {
      console.log(err.status_message)
    }
  }

  useEffect(() => {
    fetchTVShows()
  }, [])

  useEffect(() => {
    currentTVShow && fetchTVRecommendations(currentTVShow.id)
  }, [currentTVShow])

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
              <Logo
                  title='Movie 8k'
                  subtitle='Movie 8k Movies is the best'
                  img={logoImg}
              />
            </div>
            <div className="col-md-12 col-lg-4">
             <SearchBar handleSearch={fetchByTitle} />
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
          {
            currentTVShow && <TVShowDetail
                title={currentTVShow.name}
                vote={currentTVShow.vote_average}
                overview={currentTVShow.overview}
            />
          }
        </div>
        <div className={s.recommended_shows}>
          {
            tvRecommendations && <TVShowList handleClick={updateTVShow} tvShows={tvRecommendations} />
          }
        </div>
      </div>
  );
}
