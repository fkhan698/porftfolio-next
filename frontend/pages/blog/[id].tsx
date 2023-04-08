import { GetStaticProps, GetStaticPaths } from "next"
import SinglePost from "../../components/Blog/SinglePost/SinglePost"

type PostPreview = {
  id: number
  attributes: {
    title: string
    date: string
    content: string
  }
}

type Props = {
  title: string
  date: string
  content: string
}

const URL = process.env.STRAPI_URL

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params
}) => {
  const postid = params?.id
  const results = await fetch(`${URL}/${postid}?populate=*`)
  const previews = await results.json()

  const title = previews.data.attributes.title
  const date = previews.data.attributes.date
  const content = previews.data.attributes.content

  return {
    props: { title, date, content }
  }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const results = await fetch(`${URL}/?populate=*`)
  const previews: { data: PostPreview[] } = await results.json()
  return {
    paths:
      previews?.data.map((post) => ({
        params: { id: post.id.toString() }
      })) || [],
    fallback: true
  }
}

const SinglePosts = ({ title, date, content }: Props) => {
  return <SinglePost title={title} date={date} content={content} />
}

export default SinglePosts
