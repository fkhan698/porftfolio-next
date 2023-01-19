import matter from "gray-matter"
import Link from "next/link"
import React from "react"
import styles from "./Blog.module.scss"
import Image from "next/image"
import Header from "../Header/Header"

const Blog = ({ posts }:any) => {
  return (
    <>
      <Header />
      <div className={styles.BlogContainer}>
        {posts.map((post:any, index:any) => (
          <div className={styles.post}>
            <Link href={"/blog/" + post.slug } passHref key={index}>
              <img
                src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
                alt=""
              ></img>
            </Link>

            <h1>{post.frontMatter.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
