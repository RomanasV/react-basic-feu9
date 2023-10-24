import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from '../../../Components/Container/Container'
import { API_URL } from '../../../config'
import { ThreeDots } from 'react-loader-spinner'

const EditPostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(API_URL + '/posts/' + id)
      const postData = await res.json()

      const { title, body, userId } = postData

      setTitle(title)
      setBody(body)
      setSelectedUser(userId)
    }

    fetchPost()
  }, [id])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(API_URL + '/users')
      const usersData = await res.json()
      const firstUserId = usersData[0].id

      setUsers(usersData)
      setSelectedUser(firstUserId)
      setIsLoading(false)
    }

    fetchUsers()
  }, [])


  const titleHandler = event => setTitle(event.target.value)
  const bodyHandler = event => setBody(event.target.value)
  const userHandler = event => setSelectedUser(event.target.value)

  const editPostHandler = event => {
    event.preventDefault()
    setIsLoading(true)

    const editedPost = {
      id: Number(id),
      title,
      body,
      userId: Number(selectedUser),
    }

    fetch(API_URL + '/posts/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(editedPost)
    })
      .then(res => res.json())
      .then(data => {
        navigate('/api-project/posts/' + id)
      })
  }

  return (
    <Container>
      <h1>Edit Post</h1>

      {isLoading ? (
        <ThreeDots wrapperStyle={{ display: 'flex', justifyContent: 'center'}} />
      ) : (
        <form onSubmit={editPostHandler}>
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
      )}
    </Container>
  )
}

export default EditPostPage