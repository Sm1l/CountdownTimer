import React from "react";

import styles from "./Main.module.scss";
import { CountContainer } from "../CountContainer";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>we`re launching soon</h1>
      <CountContainer />
    </main>
  );
};

export { Main };
