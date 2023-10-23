import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../../config"

const PostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [postDeleted, setPostDeleted] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`${API_URL}/posts/${id}?_embed=comments&_expand=user`)
      const postData = await res.json()

      setPost(postData)
    }

    fetchPost()
  }, [id])

  if (!post) {
    return ''
  }

  const { title, body, comments } = post

  const commentsList = comments.map(comment => {
    const { name, email, body, id } = comment

    return (
      <div key={id} className="comment-item">
        <h3 className="comment-title">{name}</h3>
        <span className="comment-email">Written by: {email}</span>
        <p className="comment-body">{body}</p>
      </div>
    )
  })

  const removePostHandler = () => {
    fetch(API_URL + '/posts/' + id, {
      method: 'DELETE',
    })

    setPostDeleted(true)
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

          <div className="comments-list">
            {commentsList}
          </div>
        </>
      )}

    </Container>
  )
}

export default PostPage