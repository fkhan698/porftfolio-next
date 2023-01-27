import React from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import SideMenu from "./SideMenu"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
const Header = () => {
  const LinkedInIcon = React.forwardRef(({ onClick, href }, ref) => {
    return <FaLinkedin size="40px" />
  })
  const InstagramIcon = React.forwardRef(({ onClick, href }, ref) => {
    return <FaInstagram size="40px" />
  })
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
            <InstagramIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/faizan-khan698/">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <SideMenu />
    </div>
  )
}

export default Header
