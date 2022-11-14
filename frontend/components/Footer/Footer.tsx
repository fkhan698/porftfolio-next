import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Test </li>
      </ul>
    </div>
  );
};

export default Footer;
