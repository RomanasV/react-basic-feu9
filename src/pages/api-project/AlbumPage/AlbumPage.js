import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Container from "../../../Components/Container/Container"
import { API_URL } from "../../../config"

const AlbumPage = () => {
  const { id } = useParams()

  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch(`${API_URL}/albums/${id}?_expand=user&_embed=photos`)
      const albumData = await res.json()

      setAlbum(albumData)
    }

    fetchAlbum()
  }, [id])

  if (!album) {
    return <h2>Loading...</h2>
  }

  const { photos } = album
  const { name } = album.user

  return (
    <Container>
      <h1>{album.title}</h1>
      <span>Album created by: <Link to={`/api-project/users/${album.user.id}`}>{name}</Link></span>

      <div className="photos-list">
        {photos.map(photo => <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} /> )}
      </div>
    </Container>
  )
}

export default AlbumPage