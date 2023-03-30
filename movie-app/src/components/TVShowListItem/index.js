import s from "./style.module.css";
import {SMALL_IMG_COVER_BASE_URL} from "../../config";

export function TVShowListItem(props) {
    const { tvShow, _onClick } = props
    const { name, backdrop_path } = tvShow
    return (
        <div onClick={() => _onClick(tvShow)} className={s.container}>
            <img
                alt={name}
                src={SMALL_IMG_COVER_BASE_URL + backdrop_path}
                className={s.img}
            />
            <div className={s.title}>
                {name.length > 5 ? name.slice(0, 5) + "..." : name}
            </div>
        </div>
    );
}
