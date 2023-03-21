import { useState } from "react"
import React from "react"
import Header from "../components/Header/Header"

const URL = "http://localhost:5000/api/blogPosts?populate=*"

const BlogLayout = ({ post }: any) => {
 
  return (
    
    <>
   
      <h1>ell</h1>
    </>
  )
}

export async function getStaticProps() {
  const results = await fetch(URL)
  const response = await results.json()

  return {
    props: { response }
  }
}

export default BlogLayout
