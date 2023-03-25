
import Blog from "../components/Blog/Blog"
import styles from "../components/Blog/Blog.module.scss"
import Header from "../components/Header/Header"
const URL = "http://localhost:5000"
export const getStaticProps = async () => {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        blogposts {
          data {
            attributes {
              title
              date
              content
              slug
                image {
          data {
            attributes{
              url
            }
          }
        }

      }
    }
  }
    }
      `
    })
  }

  const res = await fetch(`${URL}/graphql`, fetchParams)
  const { data } = await res.json()

  return {
    props: {
      blogPosts: data.blogposts.data // Extract the data array from the response and pass it as a prop
    }
  }
}



const BlogPage = ({ blogPosts }:any) => {


  return (
      <>
    <Header/>
  <div className={styles.BlogContainer}>
  {blogPosts.map((post:any, i:any) => (
        <Blog key={i} post={post} />
  ))}

  </div>
    
    </>
  )
}

export default BlogPage
