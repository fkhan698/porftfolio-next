import matter from "gray-matter"
import Link from "next/link"
import React from "react"
import styles from "./Blog.module.scss"
import Image from "next/image"
import Header from "../Header/Header"

const Blog = ({ posts }: any) => {
  return (
    <>
      <Header />
      <div className={styles.BlogContainer}>
        {posts.map((post: any, index: any) => (
          <div key={index} className={styles.post}>
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <img src={post.frontMatter.thumbnailUrl} alt="Thumbnail" />
            </Link>
            <h1 className={styles.title}>{post.frontMatter.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
