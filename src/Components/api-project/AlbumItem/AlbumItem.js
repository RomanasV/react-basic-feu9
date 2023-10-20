import { Link } from "react-router-dom"

const AlbumItem = ({ data }) => {
  const { title, id } = data

  return (
    <li><Link to={`/api-project/albums/${id}`}>{title}</Link></li>
  )
}

export default AlbumItem