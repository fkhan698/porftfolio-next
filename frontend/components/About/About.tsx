import { useRef } from "react"
import styles from "./About.module.scss"
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

import Carousel from "react-material-ui-carousel"
import { Paper, Button } from "@mui/material"

const textVariants: Variants = {
  onscreen: {
    y: 50,
    transition: {
      duration: 0.8,
    },
  },
}

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
          I am a software engineer based out of Missouri. I have about 2 years
          of work experience as a developer. My skillset includes: HTML, CSS,
          JavaScript, React, Node.js, MongoDB and Express
        </motion.p>
        <motion.p variants={textVariants}>
          I enjoy collaborating with others and creating projects. I am hoping
          to write blog posts on here centered around explaining technical
          concepts
        </motion.p>
      </motion.div>
    </div>
  )
}

export default About
