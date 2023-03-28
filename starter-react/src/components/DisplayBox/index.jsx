import s from "./style.module.css";

export function DisplayBox(props) {
  const {diffLevel} = props;
  return (
    <div className={`${s.box} ${s.dFlex}`}>{ diffLevel }</div>
  );
}
