import React from "react"

import Header from "../../Header/Header"
import Link from "next/link"
import Head from "next/head"
import ReactDom from "react-dom"
import ReactMarkdown from "react-markdown"
import { FaArrowLeft } from "react-icons/fa"

import styles from "./SinglePost.module.scss"

type Post = {
  title: string
  date: string
  content: string
}

const SinglePost = ({ title, date, content }: Post) => {
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
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

const Markdown = () => {}

export default SinglePost
