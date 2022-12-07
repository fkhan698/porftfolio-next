import React from "react";
import Link from "next/link";
import styles from "./Blog.module.scss";
const BlogPost = ({ post }: any) => {
  return (
    <>
      <div className={styles.items}>
        <div className={styles.post}>
          <Link href={`/blogPost/${post.id}`}>
            <img
              className={styles.postImage}
              src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
              alt=""
            />
          </Link>
          <Link href={`/blogPost/${post.id}`}>
            <h1 className={styles.postTitle}>{post.title}</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
