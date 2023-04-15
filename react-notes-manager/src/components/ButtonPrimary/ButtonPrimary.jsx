import s from "./style.module.css";
export function ButtonPrimary({ children, onClick, disabled = false }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
