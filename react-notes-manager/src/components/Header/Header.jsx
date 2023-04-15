import { useNavigate } from "react-router-dom";
// import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import imgSrc from "assets/images/logo.png";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Logo } from "components/Logo/Logo";
import s from "./style.module.css";

export function Header() {

const navigate = useNavigate();

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          img={imgSrc}
          title="myTitle"
          subtitle="mySubtitle"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")} >
          <i>Add new +</i>
        </ButtonPrimary>
      </div>
    </div>
  );
}
