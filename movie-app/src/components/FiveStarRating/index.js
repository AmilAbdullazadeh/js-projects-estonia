import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({rating}) {

    const starList = []
    const ratingCount = Math.floor(rating)
    const isHalfStar = (rating % 1) >= 0.5
    const emptyStarCount = 5 - Math.floor(rating) - (isHalfStar ? 1 : 0)

    for (let i = 0; i < ratingCount; i ++) {
        starList.push(<StarFill />)
    }

    if(isHalfStar) {
        starList.push(<StarHalf />)
    }

    for (let i = 0; i < emptyStarCount; i ++) {
        starList.push(<StarEmpty />)
    }

    return (
        <div style={{display: "flex"}} >
            {starList}
        </div>
    )
}
