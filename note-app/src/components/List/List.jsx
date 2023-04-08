import { ListItem } from "../ListItem/ListItem";
import { Fragment } from "react"

export function List({ items }) {

  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
            {items && items.map((item, index) => (
                <Fragment key={index}>
                    <ListItem item={item} />
                </Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}
