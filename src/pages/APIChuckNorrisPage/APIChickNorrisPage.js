import { useState, useEffect } from 'react'
import Container from '../../Components/Container/Container'

const APIChickNorrisPage = () => {
  const [joke, setJoke] = useState(null)
  const [categories, setCategories] = useState([])
  const [searchInput, setSearchInput] = useState('')

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

    const selectedCategory = event.target.category.value
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
      .then(res => res.json())
      .then(joke => setJoke(joke.value))
  }
  
  const searchFormHandler = (event) => {
    event.preventDefault()

    // const searchPhrase = event.target['search-input'].value
    const searchPhrase = searchInput

    fetch(`https://api.chucknorris.io/jokes/search?query=${searchPhrase}`)
      .then(res => res.json())
      .then(data => {
        const jokes = data.result
        const jokesLength = jokes.length

        const randomIndex = Math.floor(Math.random() * jokesLength)
        const randomJoke = jokes[randomIndex]

        if (randomJoke) {
          setJoke(randomJoke.value)
        } else {
          setJoke('No joke found :(')
        }
        
        // event.target['search-input'].value = ''
        // event.target.reset()
        setSearchInput('')
      })
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

  const searchForm = categories.length > 0 ? (
    <form onSubmit={searchFormHandler}>
      <label htmlFor='search-input'>Search phrase:</label>
      <input 
        type='text' 
        id='search-input' 
        name='search-input' 
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />

      <button type='submit'>Search for a joke</button>
    </form>
  ) : (
    <p>Loading search form...</p>
  )

  return (
    <Container>
      <h1>Chuck Norris API</h1>
      <p>{joke ? joke : 'Loading...'}</p>
      <button onClick={randomJokeHandler}>Get a Random joke</button>
      {categoriesForm}
      {searchForm}
    </Container>
  )
}

export default APIChickNorrisPage