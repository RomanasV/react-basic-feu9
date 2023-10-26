import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import { toast } from 'react-toastify'

const CommentForm = ({ onNewComment, postId, editComment, onEditComment }) => {
  const [titleInput, setTitleInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [contentInput, setContentInput] = useState('')

  useEffect(() => {
    if (editComment) {
      setTitleInput(editComment.name)
      setEmailInput(editComment.email)
      setContentInput(editComment.body)
    }
  }, [editComment])

  const titleHandler = event => setTitleInput(event.target.value)
  const emailHandler = event => setEmailInput(event.target.value)
  const contentHandler = event => setContentInput(event.target.value)

  const commentFormHandler = async event => {
    event.preventDefault()

    const newComment = {
      postId: Number(postId),
      name: titleInput,
      email: emailInput,
      body: contentInput
    }

    if (editComment) {
      const { data } = await axios.put(`${API_URL}/comments/${editComment.id}`, newComment)
      onEditComment(data)
      toast.success('Comment edited')
    } else {
      const { data } = await axios.post(`${API_URL}/comments`, newComment)
      onNewComment(data)
      toast.success('Comment created')
    }

    setTitleInput('')
    setEmailInput('')
    setContentInput('')
  }

  return (
    <div>
      <h3>Write a comment</h3>
      <form onSubmit={commentFormHandler}>
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

        <button type="submit">{editComment ? 'Edit Comment' : 'Add Comment'}</button>
      </form>
    </div>
  )
}

export default CommentForm