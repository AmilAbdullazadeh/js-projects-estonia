import s from "./style.module.css";

export function TVShowList(props) {
    return (
        <div>
            <div className={s.title}>You'll probably like :</div>
            <div className={s.list}>
                <span className={s.tv_show_item}>
                    <div onClick={onClick_} className={s.container}>
                        <img
                            alt={tvShow?.name}
                            // src={SMALL_IMG_COVER_BASE_URL + tvShow?.backdrop_path}
                            className={s.img}
                        />
                        <div className={s.title}>
                            {/*name*/}
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}
