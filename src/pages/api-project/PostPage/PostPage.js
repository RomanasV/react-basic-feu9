import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { useParams } from "react-router-dom"

const PostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments&_expand=user`)
      const postData = await res.json()

      setPost(postData)
    }

    fetchPost()
  }, [id])

  return (
    <Container>
      <h1>{post ? post.title : 'Loading...'}</h1>
    </Container>
  )
}

export default PostPage