import AlbumItem from "../AlbumItem/AlbumItem"

const AlbumsList = ({ albums }) => {
  console.log(albums)

  const albumListItems = albums.map(album => <AlbumItem key={album.id} data={album} />)

  return (
    <div>
      <h2>Albums:</h2>
      <ul>
        {albumListItems}
      </ul>
    </div>
  )
}

export default AlbumsList