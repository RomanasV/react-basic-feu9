import React, { useEffect, useState } from 'react'
import Container from '../../../Components/Container/Container'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../config'
import { ThreeDots } from 'react-loader-spinner'
import { toast } from 'react-toastify'

const EditAlbumPage = () => {
  const { id } = useParams()
  const [album, setAlbum] = useState(null)

  const [title, setTitle] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios(API_URL + '/users')
      setUsers(data)
    }

    getUsers()
  }, [])

  useEffect(() => {
    const getAlbum = async () => {
      const { data } = await axios(`${API_URL}/albums/${id}`)
      setAlbum(data)

      setTitle(data.title)
      setSelectedUser(data.userId)
    }

    getAlbum()
  }, [id])

  const titleHandler = event => setTitle(event.target.value)
  const userHandler = event => setSelectedUser(event.target.value)

  const editAlbumHandler = async event => {
    event.preventDefault()

    const albumData = {
      title,
      userId: Number(selectedUser)
    }

    const res = await axios.put(`${API_URL}/albums/${id}` , albumData)

    console.log(res)

    if (res.statusText === 'OK') {
      navigate('/api-project/albums/' + res.data.id)
      toast.success('Album edited')
    } else {
      console.error('Something went wrong.')
      toast.error('Something went wrong.')
    }
  }

  return (
    <Container>
      <h1>Edit Album</h1>
      {album ? (
        <form onSubmit={editAlbumHandler}>
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

          <button type='submit'>Edit Album</button>
        </form>
      ) : (
        <ThreeDots wrapperStyle={{display: 'flex',justifyContent: 'center'}} /> 
      )}
    </Container>
  )
}

export default EditAlbumPage