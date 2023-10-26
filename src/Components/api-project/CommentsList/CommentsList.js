import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import CommentItem from "../CommentItem/CommentItem"
import CommentForm from "../CommentForm/CommentForm"

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [editComment, setEditComment] = useState(null)

  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios(`${API_URL}/posts/${postId}/comments?_sort=id&_order=desc`)
      setComments(data)
    }
    
    getComments()
  }, [postId])
  
  const newCommentHandler = newComment => {
    setComments(prevState => [newComment, ...prevState])
  }
  
  const removeCommentHandler = commentId => {
    setComments(prevState => {
      const newState = prevState.filter(item => item.id !== commentId)
      return newState
    })
  }

  const onEditCommentHandler = (data) => {
    setComments(prevState => {
      const editCommentIndex = comments.findIndex(comment => comment.id === data.id)
      const newState = [...prevState]
      newState[editCommentIndex] = data
      
      return newState
    })

    setEditComment(null)
  }

  const editCommentHandler = data => setEditComment(data)
  
  const commentItems = comments.map(comment => <CommentItem onEditComment={editCommentHandler} onRemoveComment={removeCommentHandler} key={comment.id} data={comment} />)
  
  return (
    <section className="comments-section">
      <CommentForm editComment={editComment} onEditComment={onEditCommentHandler} postId={postId} onNewComment={newCommentHandler} />

      <div className="comments-list">
        {commentItems}
      </div>
    </section>
  )
}

export default CommentsList