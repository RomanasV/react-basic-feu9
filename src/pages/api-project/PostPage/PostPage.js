import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../../config"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

const PostPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [postDeleted, setPostDeleted] = useState(false)

  const [commentTitle, setCommentTitle] = useState('')
  const [commentEmail, setCommentEmail] = useState('')
  const [commentContent, setCommentContent] = useState('')

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`${API_URL}/posts/${id}?_expand=user`)
      const postData = await res.json()
      setPost(postData)
    }

    fetchPost()

    const getComments = async () => {
      const { data } = await axios(`${API_URL}/posts/${id}/comments?_sort=id&_order=desc`)
      setComments(data)
    }

    getComments()
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

  const commentTitleHandler = event => setCommentTitle(event.target.value)
  const commentEmailHandler = event => setCommentEmail(event.target.value)
  const commentContentHandler = event => setCommentContent(event.target.value)

  const newCommentHandler = async event => {
    event.preventDefault()

    const newComment = {
      postId: Number(id),
      name: commentTitle,
      email: commentEmail,
      body: commentContent
    }

    const res = await axios.post(`${API_URL}/comments`, newComment)

    setComments(prevState => {
      const newState = [res.data, ...prevState]
      return newState
    })
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
            <div>
              <h3>Write a comment</h3>
              <form onSubmit={newCommentHandler}>
                <div className="form-control">
                  <label htmlFor="comment-title">Title</label>
                  <input 
                    type="text"
                    name="comment-title"
                    id="comment-title"
                    value={commentTitle}
                    onChange={commentTitleHandler}
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="comment-email">Email</label>
                  <input 
                    type="email"
                    name="comment-email"
                    id="comment-email"
                    value={commentEmail}
                    onChange={commentEmailHandler}
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="comment-content">Comment</label>
                  <textarea 
                    name="comment-content"
                    id="comment-content"
                    value={commentContent}
                    onChange={commentContentHandler}
                  />
                </div>

                <button type="submit">Add Comment</button>
              </form>
            </div>

            {commentsList}
          </div>
        </>
      )}

    </Container>
  )
}

export default PostPage