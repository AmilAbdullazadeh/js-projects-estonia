import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem(props) {
    const {handleChange, isSelected, diffLevel} = props
    const [isHovered, setIsHovered] = useState(false)

    function active() {
        setIsHovered(true)
    }

    function deactive() {
        setIsHovered(false)
    }

    function getBGColor() {
        return (isHovered || isSelected)?  "#EA526F" : "#DCCCFF"
    }

  return (
    <div
      onClick={() => handleChange(diffLevel)}
      onMouseEnter={() => active()}
      onMouseLeave={() => deactive()}
      className={s.item}
      style={{ backgroundColor: getBGColor()  }}
    >
        { diffLevel }
    </div>
  );
}
