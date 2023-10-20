import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link, useParams } from "react-router-dom"

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

  if (!post) {
    return ''
  }

  post.comments.map(comment => {
    // console.log(comment)
  })

  console.log(post.user.name)

  return (
    <Container>
      <h1>{post.title}</h1>
      <span>Author: <Link to={`/api-project/users/${post.user.id}`}>{post.user.name}</Link></span>
    </Container>
  )
}

export default PostPage