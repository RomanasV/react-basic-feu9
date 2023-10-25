import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../../config'

const CommentForm = ({ onNewComment, postId }) => {
  const [titleInput, setTitleInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [contentInput, setContentInput] = useState('')

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

    const { data } = await axios.post(`${API_URL}/comments`, newComment)
    onNewComment(data)

    setTitleInput('')
    setEmailInput('')
    setContentInput('')
  }

  return (
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
  )
}

export default CommentForm