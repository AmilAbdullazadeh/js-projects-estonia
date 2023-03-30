import s from "./style.module.css";

import {FiveStarRating} from "../FiveStarRating"

export function TVShowDetail(props) {
    const {title, overview, vote} = props
    const rating = vote / 2
    return (
        <div className={s.container}>
            <span className={s.title}>{title}</span>
            <FiveStarRating rating={rating} />
            <div> {rating} / 5</div>
            <div className="row">
                <div className={`col-sm-12 col-md-8 ${s.description}`}>
                    {overview}
                </div>
            </div>
        </div>
    );
}
