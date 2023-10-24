import React, { useEffect, useState } from 'react'
import Container from '../../../Components/Container/Container'
import axios from 'axios'
import { API_URL } from '../../../config'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const CreateAlbumPage = () => {
  const [title, setTitle] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios(API_URL + '/users')
      setUsers(data)
      setSelectedUser(data[0].id)
    }

    getUsers()
  }, [])

  const titleHandler = event => setTitle(event.target.value)
  const userHandler = event => setSelectedUser(event.target.value)

  const newAlbumHandler = async event => {
    event.preventDefault()

    const newAlbum = {
      title,
      userId: Number(selectedUser)
    }

    // axios.post(API_URL + '/albums', newAlbum)
    //   .then(res => console.log(res))

    const res = await axios.post(API_URL + '/albums', newAlbum)

    if (res.statusText === 'Created') {
      navigate('/api-project/albums/' + res.data.id)
    } else {
      console.error('Something went wrong.')
    }
  }

  return (
    <Container>
      {users.length > 0 ? (
        <form onSubmit={newAlbumHandler}>
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
            <label htmlFor='user'>User:</label>
            <select
              name='user'
              id='user'
              value={selectedUser}
              onChange={userHandler}
            >
              {users.map(userData => <option key={userData.id} value={userData.id}>{userData.name}</option>)}
            </select>
          </div>

          <button type='submit'>Create Album</button>
        </form>
      ) : (
        <ThreeDots wrapperStyle={{display: 'flex', justifyContent: 'center' }} />
      )}

    </Container>
  )
}

export default CreateAlbumPage