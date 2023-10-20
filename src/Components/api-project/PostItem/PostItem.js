import { Link } from "react-router-dom"

const PostItem = (props) => {
  const { title, id, comments, user } = props.data
  const userName = user && user.name
  const commentsCount = comments && comments.length

  // let postExtraInfo = (userName && commentsCount) ? ` - ${userName} (${commentsCount})` : ''
  
  let postExtraInfo = ''

  if (userName && commentsCount) {
    postExtraInfo = ` - ${userName} (${commentsCount})`
  }

  return (
    <li>
      <Link to={`/api-project/posts/${id}`}>{title}{postExtraInfo}</Link>
    </li>
  )
}

export default PostItem