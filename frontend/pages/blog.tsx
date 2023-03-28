import { useState } from "react"
import Blog from "../components/Blog/Blog"
import styles from "../components/Blog/Blog.module.scss"
import Header from "../components/Header/Header"

export async function getStaticProps() {
  const results = await fetch("http://localhost:5000/api/blogposts/?populate=*")
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
