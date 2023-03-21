import matter from "gray-matter"
import Link from "next/link"
import React from "react"
import styles from "./Blog.module.scss"
import Image from "next/image"
import Header from "../Header/Header"

const Blog = ({ post, i }: any) => {
  return (
    <>
    <Header />
      <div key={i} className={styles.BlogContainer}>
      
          <div key={post.id} className={styles.post}>
      
            <Link  href={"/blog/" + post.slug}>
            <h1 key={i} className={styles.title}>{post.attributes.title}</h1>
            </Link>
            
          </div>

      </div>
    </>
  )
}

export default Blog
