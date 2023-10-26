import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link } from "react-router-dom"
import AlbumItemWrapper from "../../../Components/api-project/AlbumItemWrapper/AlbumItemWrapper"
import { API_URL } from "../../../config"
import axios from "axios"

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    // const fetchAlbums = async () => {
    //   const res = await fetch(API_URL + '/albums?_limit=15&_expand=user&_embed=photos')
    //   const albumsData = await res.json()

    //   setAlbums(albumsData)
    // }

    // fetchAlbums()

    // fetch(API_URL + '/albums?_limit=15&_expand=user&_embed=photos')
    //   .then(res => {
    //     console.log(res)
    //     return res.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     setAlbums(data)
    //   })

    // axios(API_URL + '/albums?_limit=15&_expand=user&_embed=photos')
    //   .then(res => {
    //     setAlbums(res.data)
    //   })

    const getPosts = async () => {
      // const res = await axios(API_URL + '/albums?_limit=15&_expand=user&_embed=photos')
      // setAlbums(res.data)

      const { data } = await axios(API_URL + '/albums?_limit=15&_expand=user&_embed=photos&_sort=id&_order=desc')
      setAlbums(data)
    }

    getPosts()

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
      <Link to='/api-project/create-album'>Create New Album</Link>
      <h1>Albums:</h1>

      <div className="albums-list">
        {albumsListElement}
      </div>
    </Container>
  )
}

export default AlbumsPage