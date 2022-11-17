import React from "react"
import styles from "./Blog.module.scss"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import client from "../../helpers/apollo-client"

import BlogPost from "./BlogPost"
const ALL_POSTS_QUERY = gql`
  query ALL_POSTS {
    blogPosts {
      id
      name
    }
  }
`

const Blog = ({}) => {
  const { data } = useQuery(ALL_POSTS_QUERY)
  console.log(data)
  return (
    <>
      <div className={styles.HerroContainer}>
        <BlogPost />
      </div>
    </>
  )
}

export default Blog
