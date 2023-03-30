import { TVShowListItem } from "../TVShowListItem"
import s from "./style.module.css";

import {BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL} from "../../config"


export function TVShowList(props) {
    const { tvShows, handleClick } = props

    return (
        <div>
            <div className={s.title}>You'll probably like :</div>
            <div className={s.list}>
                    {
                        tvShows && tvShows?.map(tvShow => (
                            <span key={tvShow.id} className={s.tv_show_item}>
                                <TVShowListItem
                                    _onClick={handleClick}
                                    tvShow={tvShow}
                                />
                            </span>
                        ))
                    }
            </div>
        </div>
    );
}
