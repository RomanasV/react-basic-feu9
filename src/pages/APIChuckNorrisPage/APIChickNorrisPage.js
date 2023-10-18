import { useState, useEffect } from 'react'
import Container from '../../Components/Container/Container'

const APIChickNorrisPage = () => {
  const [joke, setJoke] = useState(null)
  const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(res => res.json())
  //     .then(joke => {
  //       setJoke(joke.value)
  //   })
  // }, [])

  useEffect(() => {
    const fetchJoke = async () => {
      const res = await fetch('https://api.chucknorris.io/jokes/random')
      const joke = await res.json()

      setJoke(joke.value)
    }

    fetchJoke()
  }, [])


  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories)
      })
  }, [])


  // const randomJokeHandler = () => {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(res => res.json())
  //     .then(joke => {
  //       setJoke(joke.value)
  //     })
  // }

  const randomJokeHandler = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await res.json()
    setJoke(joke.value)
  }

  const categoryFormHandler = (event) => {
    event.preventDefault()
    console.log('veikia')
  }

  const categoriesForm = categories.length > 0 ? (
    <form onSubmit={categoryFormHandler}>
      <label htmlFor='category'>Category:</label>
      <select id='category'>
        {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
      </select>

      <button type='submit'>Get a joke</button>
    </form>
  ) : (
    <p>Loading categories form...</p>
  )

  return (
    <Container>
      <h1>Chuck Norris API</h1>
      <p>{joke ? joke : 'Loading...'}</p>
      <button onClick={randomJokeHandler}>Get a Random joke</button>
      {categoriesForm}
    </Container>
  )
}

export default APIChickNorrisPage