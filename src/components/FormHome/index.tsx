import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHANGE_REPOSITORIES, CHANGE_USER } from "../../actions/userActions";
import { Context } from "../../contexts/Context";
import styles from "./formHome.module.css";

const FormHome = () => {
  const { dispatch } = useContext(Context);
  const [user, setUser] = useState("");
  const [nothingDataErr, setNothingDateErr] = useState(false);
  const [userNotFoundErr, setUserNotFoundErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const seachClick = async () => {
    if (!user) return setNothingDateErr(true);
    setLoading(true);
    const http = await fetch(`https://api.github.com/users/${user}`);

    if (http.status === 200) {
      const res = await http.json();
      dispatch(CHANGE_USER(res));
      const repositories_http = await fetch(res.repos_url);
      const repositories_res = await repositories_http.json();

      if (repositories_res.length) {
        dispatch(CHANGE_REPOSITORIES(repositories_res));
        navigate("/user");
      }
    } else {
      setUserNotFoundErr(true);
    }
    setLoading(false);
  };

  return (
    <section className={styles.section_form}>
      <h1 className={styles.titleFormHome} id="teste">
        EXPLORE USUÁRIOS <br />
        DO GITHUB
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className={`${styles.inputFormHome} ${
            (nothingDataErr || userNotFoundErr) && styles.errorInputFormHome
          }`}
          placeholder="Digite o usuário"
          value={user}
          onChange={(e) => {
            if (nothingDataErr) setNothingDateErr(false);
            setUser(e.target.value);
          }}
        />

        {nothingDataErr && (
          <p className={styles.errorParagraph}>
            O campo acima não pode ficar vazio :(
          </p>
        )}
        {userNotFoundErr && (
          <p className={styles.errorParagraph}>Usuário não encontrado :(</p>
        )}

        <button
          className={styles.buttonFormHome}
          onClick={seachClick}
          disabled={loading}
        >
          {loading ? "Aguarde..." : "Pesquisar"}
        </button>
      </form>
    </section>
  );
};

export default FormHome;
