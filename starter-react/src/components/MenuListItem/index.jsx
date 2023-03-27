import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem(props) {
    const [isHovered, setIsHovered] = useState(false)

    function active() {
        setIsHovered(true)
    }

    function deactive() {
        setIsHovered(false)
    }

    function getBGColor() {
        return isHovered ?  "#EA526F" : "#DCCCFF"
    }

  return (
    <div
//       onClick={diffLevel}
      onMouseEnter={() => active()}
      onMouseLeave={() => deactive()}
      className={s.item}
      style={{ backgroundColor: getBGColor()  }}
    >
        { props.diffLevel }
    </div>
  );
}
