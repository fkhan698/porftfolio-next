import React from "react"

import Header from "../../Header/Header"
import Link from "next/link"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { FaArrowLeft } from "react-icons/fa"
import SyntaxHighlighter from "react-syntax-highlighter"

import styles from "./SinglePost.module.scss"
const components = { SyntaxHighlighter }

const SinglePost = ({ frontMatter, mdxSource }: any) => {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/blog">
            <FaArrowLeft
              className={styles.backButton}
              size={"20px"}
            ></FaArrowLeft>
          </Link>

          <h1>{frontMatter.title}</h1>
        </div>

        <div className={styles.content}>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </>
  )
}

export default SinglePost
