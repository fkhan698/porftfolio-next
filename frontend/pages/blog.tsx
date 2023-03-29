import { useState } from "react"
import Blog from "../components/Blog/Blog"
import styles from "../components/Blog/Blog.module.scss"
import Header from "../components/Header/Header"

const URL = process.env.STRAPI_URL

export async function getStaticProps() {
  const results = await fetch(`${URL}/?populate=*`)
  const blogPosts = await results.json()
  return {
    props: { blogPosts }
  }
}

const BlogPage = ({ blogPosts }: any) => {
  const [posts, setPosts] = useState(blogPosts)
  return (
    <>
      <Header />
      <div className={styles.BlogContainer}>
        {blogPosts.data.map((post: any, i: any) => (
          <Blog key={i} post={post} />
        ))}
      </div>
    </>
  )
}

export default BlogPage
