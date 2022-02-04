import styles from "./repositoryItem.module.css";

interface propsType {
  name: string;
  url: string;
  description: string;
}

const RepositoryItem = (props: propsType) => {
  return (
    <div className={styles.card_repository_item}>
      <header className={styles.header_repository_item}>
        <h3>{props.name}</h3>
        <a
          href={props.url}
          target="_blank"
          className={styles.button_repository_item}
        >
          Acessar
        </a>
      </header>
      <p>{props.description}</p>
    </div>
  );
};

export default RepositoryItem;
