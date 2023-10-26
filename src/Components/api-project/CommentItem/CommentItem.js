import axios from 'axios'
import React from 'react'
import { API_URL } from '../../../config'
import { toast } from 'react-toastify'

const CommentItem = ({ data, onRemoveComment, onEditComment }) => {
  const { name, email, body, id } = data
  
  const removeHandler = async () => {
    const res = await axios.delete(`${API_URL}/comments/${id}`)

    if (res.statusText === 'OK') {
      onRemoveComment(id)
      toast.info(`Comment (id ${id}) was removed.`)
    } else {
      console.error('Something went wrong...')
      toast.error('Something went wrong...')
    }
  }

  const editHandler = () => {
    onEditComment(data)
  }

  return (
    <div className="comment-item">
      <h3 className="comment-title">{id}. {name}</h3>
      <span className="comment-email">Written by: {email}</span>
      <p className="comment-body">{body}</p>
      <button onClick={removeHandler}>Remove</button>
      <button onClick={editHandler}>Edit</button>
    </div>
  )
}

export default CommentItem