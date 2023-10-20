import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Container from "../../../Components/Container/Container"

const AlbumPage = () => {
  const { id } = useParams()

  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_expand=user`)
      const albumData = await res.json()

      setAlbum(albumData)
    }

    fetchAlbum()
  }, [id])

  if (!album) {
    return <h2>Loading...</h2>
  }

  console.log(album.user.name)

  const { name } = album.user

  return (
    <Container>
      <h1>{album.title}</h1>
      <span>Album created by: <Link to={`/api-project/users/${album.user.id}`}>{name}</Link></span>
    </Container>
  )
}

export default AlbumPage