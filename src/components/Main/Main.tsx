import React, { useState } from "react";

import styles from "./Main.module.scss";
import { CountContainer } from "../CountContainer";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const finalDate: number = +new Date("2024 Jan 1 00:00:00");
  // const finalDate = +new Date("2023 Oct 9 23:58:00");
  const [countIsVisible, setCountIsVisible] = useState(true);

  return (
    <main className={styles.main}>
      {countIsVisible ? (
        <h1 className={styles.title}>we`re launching soon</h1>
      ) : (
        <h1 className={styles.title}>happy new year!</h1>
      )}
      {countIsVisible && <CountContainer finalDate={finalDate} setCountIsVisible={setCountIsVisible} />}
    </main>
  );
};

export { Main };
