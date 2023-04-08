import { useState } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Blog from "../components/Blog/Blog"
import styles from "../components/Blog/Blog.module.scss"
import Header from "../components/Header/Header"

type Post = {
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
  blogPosts: {
    data: Post[]
  }
}

const URL = process.env.STRAPI_URL

export const getStaticProps: GetStaticProps<Props> = async () => {
  const results = await fetch(`${URL}/?populate=*`)
  const blogPosts = await results.json()
  return {
    props: { blogPosts }
  }
}

const BlogPage = ({ blogPosts }: Props) => {
  const [posts, setPosts] = useState(blogPosts)
  return (
    <>
      <Header />
      <div className={styles.BlogContainer}>
        {blogPosts.data.map((post: Post, i: number) => (
          <Blog key={i} post={post} />
        ))}
      </div>
    </>
  )
}

export default BlogPage
