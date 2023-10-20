import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../../Components/Container/Container'
import PostList from '../../../Components/api-project/PostsList/PostList'
import AlbumsList from '../../../Components/api-project/AlbumsList/AlbumsList'

const UserPage = () => {
  const { id } = useParams()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`)
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

  const { name, albums, posts } = user

  return (
    <Container>
      <h1>{name}</h1>

      <PostList posts={posts} />

      <AlbumsList albums={albums} />
    </Container>
  )
}

export default UserPage