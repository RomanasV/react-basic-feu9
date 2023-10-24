import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Container from "../../../Components/Container/Container"
import { API_URL } from "../../../config"
import axios from "axios"

const AlbumPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

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

  const removeAlbumHandler = async () => {
    // axios.delete(API_URL + '/albums/' + id)
    //   .then(res => console.log(res))
    
    const res = await axios.delete(API_URL + '/albums/' + id)
    console.log(res)

    navigate('/api-project/albums')
  }

  return (
    <Container>
      <button onClick={removeAlbumHandler}>Delete Album</button>
      <h1>{album.id}. {album.title}</h1>
      <span>Album created by: <Link to={`/api-project/users/${album.user.id}`}>{name}</Link></span>

      <div className="photos-list">
        {photos.map(photo => <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} /> )}
      </div>
    </Container>
  )
}

export default AlbumPage