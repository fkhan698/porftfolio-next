const URL = "http://localhost:5000"

export async function getStaticProps({ params }: any) {
  const postid = params.id
  const results = await fetch(`${URL}/api/blogposts/${postid}?populate=*`)
  const previews = await results.json()
  const photo = await previews.data.attributes.img.data.attributes.url
  const title = await previews.data.attributes.title

  const date = await previews.data.attributes.createdAt.toString()
  return {
    props: { photo, title, date }
  }
}
export async function getStaticPaths() {
  const results = await fetch(`${URL}/api/blogposts?populate=*`)
  const previews = await results.json()

  const paths = previews.data.map((post) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

const SinglePost = ({ photo, title, date }) => {
  console.log(title)
}

export default SinglePost
