import axios from 'axios'
import React from 'react'
import { API_URL } from '../../../config'

const CommentItem = ({ data, onRemoveComment }) => {
  const { name, email, body, id } = data
  
  const removeHandler = async () => {
    const res = await axios.delete(`${API_URL}/comments/${id}`)

    if (res.statusText === 'OK') {
      onRemoveComment(id)
    } else {
      console.error('Something went wrong...')
    }
  }

  return (
    <div className="comment-item">
      <h3 className="comment-title">{id}. {name}</h3>
      <span className="comment-email">Written by: {email}</span>
      <p className="comment-body">{body}</p>
      <button onClick={removeHandler}>Remove</button>
    </div>
  )
}

export default CommentItem