import React from "react"
import Link from "next/link"
import styles from "./Blog.module.scss"
const BlogPost = ({ post }: any) => {
  return (
    <>
      <div className={styles.items}>
        <div className={styles.post}>
          <Link href={`/blogPost/${post.id}`}>
            <img
              className={styles.postImage}
              src={post?.photo?.image?.publicUrlTransformed}
              alt={post.name}
            />
          </Link>
          <Link href={`/blogPost/${post.id}`}>
            <h1 className={styles.postTitle}>{post.title}</h1>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogPost
