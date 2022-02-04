import { useContext } from "react";
import { Context } from "../../contexts/Context";
import RepositoryItem from "../RepositoryItem";
import styles from "./repositoryItem.module.css";

const RepositoryList = () => {
  const { state } = useContext(Context);

  return (
    <section className={styles.section_repository_list}>
      <h1 className={styles.title_repository_list}>LISTA DE REPOSITÓRIOS</h1>
      <div>
        {state.user.repositories.map((repository) => {
          return (
            <RepositoryItem
              key={repository.id}
              name={repository.name}
              description={repository.description}
              url={repository.html_url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RepositoryList;
