import React from "react";
import styles from "./About.module.scss";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  onscreen: {
    y: -100,
    transition: {
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <motion.div
        className={styles.aboutText}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={textVariants}>
          I am a software engineer based out of Missouri. I Specialize in
          creating web apps using React, Nodejs, and other tech. I also have
          interest in creating digital art either by code or by hand. I plan on
          using this website to display some of my work
        </motion.p>
        <p>
          * This website is still a work in progress, but should have more
          content coming soon
        </p>
      </motion.div>
    </div>
  );
};

export default About;
