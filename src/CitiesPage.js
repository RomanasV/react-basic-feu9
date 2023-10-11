import { useState } from "react";
import Container from "./Components/Container/Container"
import CityItem from "./Components/CityItem";
import './CitiesPage.css'

const CitiesPage = () => {
  const [name, setName] = useState('')
  const [population, setPopulation] = useState(0)

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
          continent: 'Unknown',
          country: 'Unknown',
      },
      touristAttractions: [],
      isCapital: false,
    }

    setName('')
    setPopulation(0)

    console.log(newCity)
  }

  const nameInputHandler = (event) => setName(event.target.value)
  const populationInputHandler = (event) => setPopulation(event.target.valueAsNumber)

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

        <input type="submit" value="Create New City" />
      </form>

      <div className="cities-list">
        {citiesListElement}
      </div>
    </Container>
  )
}

export default CitiesPage