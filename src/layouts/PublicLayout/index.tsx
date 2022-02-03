import { ReactNode } from "react";
import BoxContainer from "../../components/BoxContainer";
import styles from "./publicLayout.module.css";
import wave from "../../svgs/wave.svg";
import Header from "../../components/Header/";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BoxContainer>
      <Header />
      {children}
      <img
        src={wave}
        className={styles.wave}
        alt="imagem de uma figura geométrica ondulada"
      />
    </BoxContainer>
  );
};

export default PublicLayout;
