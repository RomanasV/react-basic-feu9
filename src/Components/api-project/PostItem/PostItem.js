import { Link } from "react-router-dom"

const PostItem = (props) => {
  const { title, id, comments, user } = props.data
  const userName = user.name
  const commentsCount = comments.length

  return (
    <li>
      <Link to={`/api-project/posts/${id}`}>{title}</Link> - {userName} ({commentsCount})
    </li>
  )
}

export default PostItem