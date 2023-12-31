import { Link } from "react-router-dom"

const AlbumItemWrapper = ({ data }) => {
  const { id, photos, user, title } = data

  let image = ''

  if (photos.length > 0) {
    const randomIndex = Math.floor(Math.random() * photos.length)

    const randomImage = photos[randomIndex]
    
    const thumbnailUrl = randomImage.thumbnailUrl
    const imageTitle = randomImage.title
  
    image = <img src={thumbnailUrl} alt={imageTitle} />
  } 

  return (
    <div className="album-item" key={id}>
      <Link to={`/api-project/albums/${id}`}>
        <h3>{id}. {title} ({photos.length})</h3>
        <span>Created by: {user.name}</span>
        {image}
      </Link>
    </div>
  )
}

export default AlbumItemWrapper