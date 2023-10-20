import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import { Link } from "react-router-dom"

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const usersData = await res.json()

      setUsers(usersData)
    }

    fetchUsers()
  }, [])

  if (users.length === 0) {
    <h1>Loading...</h1>
  }

  return (
    <Container>
      <h1>Users:</h1>

      <ul>
        {users.map(user => <li key={user.id}><Link to={`/api-project/users/${user.id}`}>{user.name}</Link></li>)}
      </ul>
    </Container>
  )
}

export default UsersPage