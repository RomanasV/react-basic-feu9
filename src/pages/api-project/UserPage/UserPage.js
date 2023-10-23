import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../../Components/Container/Container'
import PostList from '../../../Components/api-project/PostsList/PostList'
import AlbumsList from '../../../Components/api-project/AlbumsList/AlbumsList'
import { API_URL } from '../../../config'

const UserPage = () => {
  const { id } = useParams()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${API_URL}/users/${id}?_embed=posts&_embed=albums`)
      const userData = await res.json()

      setUser(userData)
    }

    fetchUser()
  }, [id])

  if (!user) {
    return (
      <Container>
        <h2>Loading...</h2>
      </Container>
    )
  }

  const { name, albums, posts, username, email, phone, website } = user

  return (
    <Container>
      <div className='user-info'>
        <h1>{name} ({username})</h1>
        <h2>Contacts:</h2>
        <ul>
          <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
          <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
          <li>Website: <a href={website} target='_blank' rel="noreferrer">{website}</a></li>
        </ul>
      </div>

      <PostList posts={posts} />

      <AlbumsList albums={albums} />
    </Container>
  )
}

export default UserPage