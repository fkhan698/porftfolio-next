import React from "react";
import styles from "./Herro.module.scss";

import { motion } from "framer-motion";

const Herro = () => {
  return (
    <>
      <div className={styles.HerroContainer}>
        <motion.div
          animate={{ y: 40, transitionEnd: { zIndex: -1 } }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className={styles.introText}
        >
          <h1>Faizan Khan</h1>
          <p>Software Engineer | Novice Digital Artist</p>
        </motion.div>
        <motion.div
          animate={{ y: 30, transitionEnd: { zIndex: -1 } }}
          transition={{ ease: "easeOut", duration: 1.4 }}
          className={styles.headshot}
        >
          <img className={styles.headshotImage} src="/headshot.jpg" />
        </motion.div>
      </div>
    </>
  );
};

export default Herro;
