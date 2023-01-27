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
  const ArrowButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <FaArrowLeft className={styles.backButton} size={"20px"}></FaArrowLeft>
    )
  })
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <Link href="/blog">
              <ArrowButton />
            </Link>

            <h1>{frontMatter.title}</h1>
          </div>

          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </>
  )
}

export default SinglePost
