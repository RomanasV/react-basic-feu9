import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link } from "react-router-dom"
import AlbumItemWrapper from "../../../Components/api-project/AlbumItemWrapper/AlbumItemWrapper"
import { API_URL } from "../../../config"

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await fetch(API_URL + '/albums?_limit=15&_expand=user&_embed=photos')
      const albumsData = await res.json()

      setAlbums(albumsData)
    }

    fetchAlbums()
  }, [])

  if (albums.length === 0) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    )
  }

  console.log(albums)

  const albumsListElement = albums.map(album => <AlbumItemWrapper key={album.id} data={album} />)

  return (
    <Container>
      <h1>Albums:</h1>

      <div className="albums-list">
        {albumsListElement}
      </div>
    </Container>
  )
}

export default AlbumsPage