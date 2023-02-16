import React from "react"

import Header from "../../Header/Header"
import Link from "next/link"
import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import { FaArrowLeft } from "react-icons/fa"
import SyntaxHighlighter from "react-syntax-highlighter"

import styles from "./SinglePost.module.scss"
const components = { SyntaxHighlighter }

const SinglePost = ({ frontMatter, mdxSource }: any) => {
  return (
    <>
      <Header />
      <Head>
        <title>{frontMatter.title}</title>
        <meta property="keywords" content={frontMatter.tags} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:author" content={frontMatter.author} />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:image" content={frontMatter.thumbNailUrl} />
      </Head>
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

            <h1>{frontMatter.title}</h1>
          </div>
          <h2>{frontMatter.date}</h2>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </>
  )
}

export default SinglePost
