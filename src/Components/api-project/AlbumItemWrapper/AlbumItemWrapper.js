import { Link } from "react-router-dom"

const AlbumItemWrapper = ({ data }) => {
  console.log(data)
  const { id, photos, user, title } = data

  const randomIndex = Math.floor(Math.random() * photos.length)
  const randomImage = photos[randomIndex]

  const thumbnailUrl = randomImage.thumbnailUrl
  const imageTitle = randomImage.title

  const image = <img src={thumbnailUrl} alt={imageTitle} />

  return (
    <div className="album-item" key={id}>
      <Link to={`/api-project/albums/${id}`}>
        <h3>{title} ({photos.length})</h3>
        <span>Created by: {user.name}</span>
        {image}
      </Link>
    </div>
  )
}

export default AlbumItemWrapper