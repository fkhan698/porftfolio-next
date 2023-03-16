const URL = "http://localhost:5000"
export const getStaticProps = async (context) => {
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

const BlogPage = ({ blogPosts }) => {
  return (
    <>
      <h1>BLog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.attributes.title}</li>
        ))}
      </ul>
    </>
  )
}

export default BlogPage
