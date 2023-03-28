import React from "react"

import Header from "../../Header/Header"
import Link from "next/link"
import Head from "next/head"
import { FaArrowLeft } from "react-icons/fa"

import styles from "./SinglePost.module.scss"

const SinglePost = ({ photo, title, date, content }: any) => {
  return (
    <>
      <Header />
      {/* <Head></Head> */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <Link href="/blog">
              <a>
                <FaArrowLeft
                  className={styles.backButton}
                  size={"20px"}
                ></FaArrowLeft>
              </a>
            </Link>

            <h1>{title}</h1>
          </div>
          <h2>{date}</h2>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default SinglePost
