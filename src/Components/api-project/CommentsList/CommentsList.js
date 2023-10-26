import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import CommentItem from "../CommentItem/CommentItem"
import CommentForm from "../CommentForm/CommentForm"
import { toast } from "react-toastify"

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
  
  const removeCommentHandler = commentId => {
    setComments(prevState => {
      const newState = prevState.filter(item => item.id !== commentId)
      return newState
    })
  }

  const commentHandler = async commentData => {
    if (editComment) {
      const { data } = await axios.put(`${API_URL}/comments/${editComment.id}`, commentData)

      setComments(prevState => {
        const editCommentIndex = comments.findIndex(comment => comment.id === data.id)
        const newState = [...prevState]
        newState[editCommentIndex] = data
        
        return newState
      })

      setEditComment(null)

      toast.success('Comment edited')
    } else {
      const { data } = await axios.post(`${API_URL}/comments`, commentData)
      setComments(prevState => [data, ...prevState])

      toast.success('Comment created')
    }
  }

  const editCommentHandler = data => setEditComment(data)
  
  const commentItems = comments.map(comment => <CommentItem onEditComment={editCommentHandler} onRemoveComment={removeCommentHandler} key={comment.id} data={comment} />)
  
  return (
    <section className="comments-section">
      <CommentForm onComment={commentHandler} editComment={editComment} postId={postId} />

      <div className="comments-list">
        {commentItems}
      </div>
    </section>
  )
}

export default CommentsList