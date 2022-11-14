import React from "react";
import Header from "../Header/Header";
import styles from "./Blog.module.scss";
const Blog = () => {
  return (
    <div>
      <h1 className={styles.container}>Blog Template</h1>
      <div className={styles.grid}></div>
    </div>
  );
};

export default Blog;
