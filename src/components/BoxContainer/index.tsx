import styles from "./boxContainer.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BoxContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default BoxContainer;
