import s from "./style.module.css";

export function Logo({ title, subtitle, img}) {
  return (
    <>
      <div className={s.container}>
        { img && <img className={s.img} src={img} alt="logo" />}
        <h1 className={s.title}>{title}</h1>
      </div>
      <h2 className={s.subtitle}>{subtitle}</h2>
    </>
  );
}
