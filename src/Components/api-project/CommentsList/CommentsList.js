import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import CommentItem from "../CommentItem/CommentItem"

const CommentsList = ({ postId }) => {
  const [titleInput, setTitleInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [contentInput, setContentInput] = useState('')

  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios(`${API_URL}/posts/${postId}/comments?_sort=id&_order=desc`)
      setComments(data)
    }
    
    getComments()
  }, [postId])

  const [comments, setComments] = useState([])

  const commentsList = comments.map(comment => <CommentItem key={comment.id} data={comment} />)

  const titleHandler = event => setTitleInput(event.target.value)
  const emailHandler = event => setEmailInput(event.target.value)
  const contentHandler = event => setContentInput(event.target.value)

  const newCommentHandler = async event => {
    event.preventDefault()

    const newComment = {
      postId: Number(postId),
      name: titleInput,
      email: emailInput,
      body: contentInput
    }

    const res = await axios.post(`${API_URL}/comments`, newComment)

    setComments(prevState => {
      const newState = [res.data, ...prevState]
      return newState
    })

    setTitleInput('')
    setEmailInput('')
    setContentInput('')
  }

  return (
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
              value={titleInput}
              onChange={titleHandler}
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="comment-email">Email</label>
            <input 
              type="email"
              name="comment-email"
              id="comment-email"
              value={emailInput}
              onChange={emailHandler}
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="comment-content">Comment</label>
            <textarea 
              name="comment-content"
              id="comment-content"
              value={contentInput}
              onChange={contentHandler}
            />
          </div>

          <button type="submit">Add Comment</button>
        </form>
      </div>

      {commentsList}
    </div>
  )
}

export default CommentsList