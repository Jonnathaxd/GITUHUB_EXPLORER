import github from "../../svgs/github.svg";
import arrow from "../../svgs/arrow.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header_github_explorer}>
      <div className={styles.logo_header}>
        <img
          src={github}
          alt="Icone do github"
        />
       <span><b>github_</b>explorer</span>
      </div>
      <img src={arrow} alt="imagem de uma seta apontada para esquerda" />
    </header>
  );
};

export default Header;
