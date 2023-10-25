import React from 'react'

const CommentItem = ({ data }) => {
  const { name, email, body, id } = data
  
  return (
    <div key={id} className="comment-item">
      <h3 className="comment-title">{name}</h3>
      <span className="comment-email">Written by: {email}</span>
      <p className="comment-body">{body}</p>
    </div>
  )
}

export default CommentItem