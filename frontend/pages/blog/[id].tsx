const URL = "http://localhost:5000"

export async function getStaticProps({ params }: any) {
  const postid = params.id
  const results = await fetch(`${URL}/api/blogposts/${postid}?populate=*`)
  const previews = await results.json()

  const title = await previews.data.attributes.title
  const date = await previews.data.attributes.date
  const content = await previews.data.attributes.content

  return {
    props: { title, date, content }
  }
}
export async function getStaticPaths() {
  const results = await fetch("http://localhost:5000/api/blogposts?populate=*")
  const previews = await results.json()
  return {
    paths:
      previews?.data.map((post) => ({
        params: { id: post.id.toString() }
      })) || [],
    fallback: true
  }
}

const SinglePost = ({ photo, title, date, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  )
}

export default SinglePost
