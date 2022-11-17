import React from "react";
import Link from "next/link";
import styles from "./Blog.module.scss";
const BlogPost = ({ post }: any) => {
  return (
    <>
      <div className={styles.postGrid}>
        <div className={styles.post}>
          <h1>{post.title}</h1>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
