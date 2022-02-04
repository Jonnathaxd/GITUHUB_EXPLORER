import github from "../../svgs/github.svg";
import arrow from "../../svgs/arrow.svg";
import styles from "./header.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header_github_explorer}>
      <div className={styles.logo_header}>
        <img src={github} alt="Icone do github" />
        <span>
          <b>github_</b>explorer
        </span>
      </div>
      {location.pathname === "/user" && (
        <button className={styles.backImage} onClick={() => navigate("/")}>
          <img src={arrow} alt="imagem de uma seta apontada para esquerda" />
        </button>
      )}
    </header>
  );
};

export default Header;
