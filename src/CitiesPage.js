import { useState } from "react";
import Container from "./Components/Container/Container"
import CityItem from "./Components/CityItem";
import './CitiesPage.css'

const CitiesPage = () => {
  const [name, setName] = useState('')
  const [population, setPopulation] = useState(0)
  const [continent, setContinent] = useState('')
  const [country, setCountry] = useState('')
  const [isCapital, setIsCapital] = useState(false)
  const [touristAttractions, setTouristAttractions] = useState(['viena', 'du', 'trys'])

  const citiesData = [
    // {
    //     name: 'Vilnius',
    //     population: 500000,
    //     location: {
    //         continent: 'Europe',
    //         country: 'Lietuva',
    //     },
    //     touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
    //     isCapital: true,
    // },
    {
        name: 'New York',
        population: 8500000,
        location: {
            continent: 'North America',
            country: 'United States',
        },
        touristAttractions: [],
        isCapital: false,
    },
    {
        name: 'Tokyo',
        population: 14000000,
        location: {
            continent: 'Asia',
            country: 'Japan',
        },
        touristAttractions: ['Sensō-ji'],
        isCapital: true,
    },
    {
        name: 'Amsterdam',
        population: 1400000,
        location: {
            continent: 'Europe',
            country: 'Netherlands',
        },
        touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
        isCapital: true,
    },
    {
        name: 'Monaco',
        population: 40000,
        location: {
            continent: 'Europe',
            country: 'Monaco',
        },
        touristAttractions: [],
        isCapital: true,
    },
    {
        name: 'Havana',
        population: 2400000,
        location: {
            continent: 'North America',
            country: 'Cuba',
        },
        touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
        isCapital: true,
    },
    {
        name: 'Singapore',
        population: 5600000,
        location: {
            continent: 'Asia',
            country: 'Singapore',
        },
        touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
        isCapital: true,
    },
    {
        name: 'Melbourne',
        population: 5000000,
        location: {
            continent: 'Australia',
            country: 'Australia',
        },
        touristAttractions: ['Melbourne Skydeck'],
        isCapital: false,
    },
    {
        name: 'Sapporo',
        population: 1900000,
        location: {
            continent: 'Asia',
            country: 'Japan',
        },
        touristAttractions: ['Hokkaido Jingu'],
        isCapital: false,
    },
    {
        name: 'Miami',
        population: 400000,
        location: {
            continent: 'North America',
            country: 'United States',
        },
        touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
        isCapital: false,
    },
  ];

  const [cities, setCities] = useState(citiesData)

  const citiesListElement = cities.map((city, index) => {
    const lastOddElement = index + 1 === cities.length && index % 2 === 0

    return <CityItem key={index} data={city} fullWidth={lastOddElement} />
  })

  const newCityHandler = (event) => {
    event.preventDefault()

    const newCity = {
      name,
      population,
      location: {
          continent,
          country,
      },
      touristAttractions,
      isCapital,
    }

    setName('')
    setPopulation(0)
    setContinent('')
    setCountry('')
    setIsCapital(false)
    setTouristAttractions([])

    // setCities(prevState => {
    //   const newState = [...prevState]
    //   newState.unshift(newCity)
    //   return newState
    // })

    // setCities(prevState => {
    //   const newState = [newCity, ...prevState]
    //   return newState
    // })

    // setCities(prevState => {
    //   return [newCity, ...prevState]
    // })

    setCities(prevState => [newCity, ...prevState])
  }

  const nameInputHandler = event => setName(event.target.value)
  const populationInputHandler = event => setPopulation(event.target.valueAsNumber)
  const continentInputHandler = event => setContinent(event.target.value)
  const countryInputHandler = event => setCountry(event.target.value)
  const capitalInputHandler = () => setIsCapital(prevState => !prevState)
  const touristAttractionsInputHandler = (event) => {
    const enteredValue = event.target.value
    const touristAttractionsArr = enteredValue.split(',')
    const updatedTouristAttractionsArr = touristAttractionsArr.map(location => {
      const trimmedLocation = location.trim()
      const updatedLocation = trimmedLocation.length > 0 ? trimmedLocation.at(0).toUpperCase() + trimmedLocation.slice(1) : ''
      return updatedLocation
    })

    setTouristAttractions(updatedTouristAttractionsArr)
  }
  
  return (
    <Container>
      <form id="city-form" onSubmit={newCityHandler}>
        <div className="form-control">
          <label htmlFor="name">City name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name}
            onChange={nameInputHandler}
          />
        </div>

        <div className="form-control">
          <label htmlFor="population">City population:</label>
          <input 
            type="number"
            min={0}
            step={1000}
            id="population" 
            name="population" 
            value={population}
            onChange={populationInputHandler}
          />
        </div>

        <div className="form-control">
          <label htmlFor="continent">City continent:</label>
          <input 
            type="text"
            id="continent" 
            name="continent" 
            value={continent}
            onChange={continentInputHandler}
          />
        </div>

        <div className="form-control">
          <label htmlFor="country">City country:</label>
          <input 
            type="text"
            id="country" 
            name="country" 
            value={country}
            onChange={countryInputHandler}
          />
        </div>

        <div className="form-control form-control-inline">
          <input 
            type="checkbox"
            id="capital" 
            name="capital"
            checked={isCapital}
            onChange={capitalInputHandler}
          />

          <label htmlFor="capital">Capital</label>
        </div>

        <div className="form-control">
          <label htmlFor="tourist-attractions">City tourist attractions:</label>
          <textarea 
            rows={5}
            value={touristAttractions.join(', ')}
            id="tourist-attractions" 
            name="tourist-attractions" 
            onChange={touristAttractionsInputHandler}
          >
          </textarea>
        </div>

        <input type="submit" value="Create New City" />
      </form>

      <div className="cities-list">
        {citiesListElement}
      </div>
    </Container>
  )
}

export default CitiesPage