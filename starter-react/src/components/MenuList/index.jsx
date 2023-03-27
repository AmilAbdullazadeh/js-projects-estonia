import { MenuListItem } from '../MenuListItem';
import s from './style.module.css';
//utils
import { levels } from '../../utils/contants';

export function MenuList(props) {
  return (
    <div className={s.box}>
      {
        levels.map((level, index) => (
            <MenuListItem diffLevel={level} />
        ))
      }
    </div>
  );
}
