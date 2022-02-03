import styles from "./formHome.module.css";

const FormHome = () => {
  return (
    <section className={styles.section_form}>
      <h1 className={styles.titleFormHome}>
        EXPLORE USUÁRIOS <br />
        DO GITHUB
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" className={styles.inputFormHome} placeholder="Digite o usuário" />
        <button className={styles.buttonFormHome}>Pesquisar</button>
      </form>
    </section>
  );
};

export default FormHome;
