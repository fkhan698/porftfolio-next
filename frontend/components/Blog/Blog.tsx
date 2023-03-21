import matter from "gray-matter"
import Link from "next/link"
import React from "react"
import styles from "./Blog.module.scss"
import Image from "next/image"
import Header from "../Header/Header"

const Blog = ({ post, i }: any) => {
  return (
    <>

        <div className={styles.post}>
            <img src={post.attributes.image.data[0].attributes.url}></img>
            <Link  href={"/blog/" + post.attributes.slug} >
            <h1 className={styles.title}>{post.attributes.title}</h1>
            </Link>
            
          </div>
 
    </>
  )
}

export default Blog
