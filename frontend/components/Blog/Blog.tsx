import Link from "next/link"
import React from "react"
import styles from "./Blog.module.scss"
import Image from "next/image"
import Header from "../Header/Header"

type Posts = {
  id: string
  attributes: {
    title: string
    slug: string
    image: {
      data: {
        attributes: {
          url: string
        }
      }[]
    }
  }
}
type Props = {
  post: Posts
}
const Blog = ({ post }: Props) => {
  return (
    <>
      <div className={styles.post}>
        <Link href={"/blog/" + post.id}>
          <div>
            <Image
              className={styles.thumbnail}
              width={410}
              height={550}
              src={post.attributes.image.data[0].attributes.url}
            />
          </div>
        </Link>

        <Link href={"/blog/" + post.attributes.slug}>
          <h1 className={styles.title}>{post.attributes.title}</h1>
        </Link>
      </div>
    </>
  )
}

export default Blog
