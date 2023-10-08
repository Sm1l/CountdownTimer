import React from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <footer className={styles.footer}></footer>;
};

export { Footer };
