import React from "react";
import styles from "./Herro.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";

const HerroCopy = () => {
  return (
    <>
      <div className={styles.HerroContainer}>
        <div className={styles.postGrid}>
          <div className={styles.post}>
            <Link href="/">
              <img
                className={styles.postImage}
                src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
                alt=""
              />
            </Link>
            <Link href="/">
              <h1 className={styles.postTitle}>Test Post 1</h1>
            </Link>
          </div>
          <div className={styles.post}>
            <Link href="/">
              <img
                className={styles.postImage}
                src="https://images.unsplash.com/photo-1611504261400-bca14f7e0b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </Link>
            <Link href="/">
              <h1 className={styles.postTitle}>Test Post 2</h1>
            </Link>
          </div>
          <div className={styles.post}>
            <img
              className={styles.postImage}
              src="https://images.unsplash.com/photo-1522968612903-47b4f32c995c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTk2OTIyNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <Link href="/">
              <h1 className={styles.postTitle}>Test Post 3</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HerroCopy;
