import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Container from "../../../Components/Container/Container"
import { API_URL } from "../../../config"
import axios from "axios"
import { toast } from "react-toastify"

const AlbumPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [album, setAlbum] = useState(null)
  const [photos, setPhotos] = useState([])
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')

  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch(`${API_URL}/albums/${id}?_expand=user&_sort=id&_order=desc`)
      const albumData = await res.json()

      setAlbum(albumData)
    }

    fetchAlbum()

    const getPhotos = async () => {
      const { data } = await axios(`${API_URL}/albums/${id}/photos?_sort=id&_order=desc`)
      setPhotos(data)
    }

    getPhotos()
  }, [id])

  if (!album) {
    return <h2>Loading...</h2>
  }

  const { name } = album.user

  const removeAlbumHandler = async () => {
    // axios.delete(API_URL + '/albums/' + id)
    //   .then(res => console.log(res))
    
    const res = await axios.delete(API_URL + '/albums/' + id)
    console.log(res)

    navigate('/api-project/albums')
    toast.error('Album deleted.')
  }

  const titleHandler = event => setTitle(event.target.value)
  const urlHandler = event => setUrl(event.target.value)
  const thumbnailUrlHandler = event => setThumbnailUrl(event.target.value)

  const newImageHandler = async event => {
    event.preventDefault()

    const imageData = {
      albumId: album.id,
      title,
      url,
      thumbnailUrl
    }

    const { data } = await axios.post(`${API_URL}/photos`, imageData)

    setPhotos(prevState => [data, ...prevState])

    setTitle('')
    setUrl('')
    setThumbnailUrl('')
  }

  return (
    <Container>
      <Link to={`/api-project/edit-album/${id}`}>Edit Album</Link>
      <button onClick={removeAlbumHandler}>Delete Album</button>
      <h1>{album.id}. {album.title}</h1>
      <span>Album created by: <Link to={`/api-project/users/${album.user.id}`}>{name}</Link></span>

      <div className="albums-form-wrapper">
        <h2>Add a photo</h2>

        <form onSubmit={newImageHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input 
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={titleHandler}            
            />
          </div>

          <div className="form-control">
            <label htmlFor="url">Url</label>
            <input 
              type="text"
              name="url"
              id="url"
              value={url}
              onChange={urlHandler}            
            />
          </div>

          <div className="form-control">
            <label htmlFor="thumbnail-url">Thumbnail Url</label>
            <input 
              type="text"
              name="thumbnail-url"
              id="thumbnail-url"
              value={thumbnailUrl}
              onChange={thumbnailUrlHandler}            
            />
          </div>

          <button type="submit">Add Photo</button>
        </form>
      </div>

      <div className="photos-list">
        {photos.length > 0 ? (
          photos.map(photo => <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} /> )
        ) : (
          <h2>No photos in the album yet</h2>
        )}
      </div>
    </Container>
  )
}

export default AlbumPage