import React from "react";
import styles from "./Blog.module.scss";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import client from "../../helpers/apollo-client";
import Link from "next/link";

import BlogPost from "./BlogPost";
const ALL_POSTS_QUERY = gql`
  query ALL_POSTS {
    blogPosts {
      id
      publishedAt
      title
    }
  }
`;

const Blog = ({}) => {
  const { data, error, loading } = useQuery(ALL_POSTS_QUERY);
  if (loading) return <p>Loading...</p>;

  console.log(data);

  return (
    <>
      <div className={styles.BlogContainer}>
        <div className={styles.items}>
          <div className={styles.post}>
            <h1 style={{ textAlign: "center" }}>Blog Posts in development</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
