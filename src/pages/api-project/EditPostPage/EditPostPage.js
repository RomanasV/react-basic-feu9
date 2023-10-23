import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../../Components/Container/Container'

const EditPostPage = () => {
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      const postData = await res.json()

      const { title, body, userId } = postData

      setTitle(title)
      setBody(body)
      setSelectedUser(userId)
    }

    fetchPost()
  }, [])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const usersData = await res.json()
      const firstUserId = usersData[0].id

      setUsers(usersData)
      setSelectedUser(firstUserId)
    }

    fetchUsers()
  }, [])


  const titleHandler = event => setTitle(event.target.value)
  const bodyHandler = event => setBody(event.target.value)
  const userHandler = event => setSelectedUser(event.target.value)

  const newPostHandler = event => {
    event.preventDefault()

    const newPost = {
      id: Number(id),
      title,
      body,
      userId: Number(selectedUser),
    }

    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <Container>
      <h1>Edit Post</h1>

      {users.length > 0 ? (
        <form onSubmit={newPostHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Title:</label>
            <input 
              type='text' 
              name='title' 
              id='title'
              value={title}
              onChange={titleHandler}  
            />
          </div>

          <div className='form-control'>
            <label htmlFor='body'>Content:</label>
            <textarea 
              name='body' 
              id='body'
              value={body}
              onChange={bodyHandler}  
            />
          </div>

          <div className='form-control'>
            <select onChange={userHandler} value={selectedUser}>
              {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
          </div>

          <button type='submit'>Edit</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  )
}

export default EditPostPage