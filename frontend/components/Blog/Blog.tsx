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
          <div className={styles.post}>
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <img
                src={post.frontMatter.thumbnailUrl}
                className="img-fluid mt-1 rounded-start"
                alt="thumbnail"
              ></img>
            </Link>
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <h1>{post.frontMatter.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
