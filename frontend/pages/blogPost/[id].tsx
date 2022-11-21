import React from "react"
import SinglePost from "../../components/Blog/SinglePost/SinglePost"

const BlogPost = ({ query }: any) => {
  return <SinglePost id={query.id} />
}

export default BlogPost
