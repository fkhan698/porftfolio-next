import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    blogPost(where: { id: $id }) {
      title
    }
  }
`

const SinglePost = ({ id }: any) => {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  const { Post } = data
  console.log(Post)
  return (
    <div>
      <h1>Title</h1>
    </div>
  )
}

export default SinglePost
