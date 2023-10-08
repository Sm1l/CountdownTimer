import React from "react";

import styles from "./CountItem.module.scss";

interface CountItemProps {
  number: number;
  text: string;
}

const CountItem: React.FC<CountItemProps> = ({ number, text }) => {
  return (
    <div className={styles.countItem}>
      <div className={styles.count}>
        {number < 10 ? `0${number}` : number}
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export { CountItem };
