import s from "./style.module.css";

export function ListItem({item}) {
  return (
    <tr>
      <th className={s.name} >{item.name}</th>
      <td className={s.price}>{item.price} $</td>
    </tr>
  );
}
