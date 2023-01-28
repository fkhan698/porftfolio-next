import React from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import SideMenu from "./SideMenu"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>FK</h1>
          </Link>
        </div>
        <ul className={styles.pageLinks}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/Faizan-Resume.pdf">Resume</Link>
        </ul>

        <div className={styles.icons}>
          <Link href="https://www.instagram.com/faizankhan15/" passHref>
            <a>
              <FaInstagram size={"40px"} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/faizan-khan698/">
            <a>
              <FaLinkedin size={"40px"} />
            </a>
          </Link>
        </div>
      </div>
      <SideMenu />
    </div>
  )
}

export default Header
