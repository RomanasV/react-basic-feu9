import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../../config"
import { ThreeDots } from "react-loader-spinner"
import CommentsList from "../../../Components/api-project/CommentsList/CommentsList"
import { toast } from "react-toastify"

const PostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [postDeleted, setPostDeleted] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`${API_URL}/posts/${id}?_expand=user`)
      const postData = await res.json()
      setPost(postData)
    }

    fetchPost()
  }, [id])

  if (!post) {
    return (
      <ThreeDots 
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center'
        }}
      />
    )
  }

  if (Object.keys(post).length === 0) {
    return <h1>Something went wrong...</h1>
  }

  const { title, body } = post

  const removePostHandler = () => {
    fetch(API_URL + '/posts/' + id, {
      method: 'DELETE',
    })

    setPostDeleted(true)
    toast.error('Post Deleted')
  }

  return (
    <Container>
      {postDeleted ? (
        <>
          <p>Post was deleted</p>
          <Link to='/api-project/posts'>Go back to posts</Link>
        </>
      ) : (
        <>
          <Link to={`/api-project/edit-post/${id}`}>Edit Post</Link>
          <button onClick={removePostHandler}>Delete Post</button>
          <h1>{id}. {title}</h1>
          <span>Author: <Link to={`/api-project/users/${post.user.id}`}>{post.user.name}</Link></span>

          <p>{body}</p>

          <CommentsList postId={id} />
        </>
      )}

    </Container>
  )
}

export default PostPage