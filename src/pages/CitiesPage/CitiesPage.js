import { v4 as uuid } from 'uuid'
import { useState } from "react";
import Container from "../../Components/Container/Container"
import CityItem from "../../Components/CityItem";
import './CitiesPage.css'
import CitiesForm from "../../Components/CitiesForm";

const CitiesPage = () => {
  const citiesData = [
    // {
        // id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
  const [editCity, setEditCity] = useState(null)

  const addCityHandler = newCity => {
    if (editCity) {
        setCities(prevState => {
            const editId = editCity.id
            const editCityIndex = prevState.findIndex(city => city.id === editId)
            const newState = [...prevState]
            newState[editCityIndex] = newCity

            setEditCity(null)
            return newState
        })
    } else {
        setCities(prevState => [newCity, ...prevState])
    }
  }

  const removeCityHandler = index => {
    setCities(prevState => {
        // const newState = [...prevState]
        // newState.splice(index, 1)
        // return newState
        
        return prevState.toSpliced(index, 1)
    })
  }

  const editCityHandler = index => {
    const selectedCity = cities[index]
    setEditCity(selectedCity)
  }

  const citiesListElement = cities.map((city, index) => {
    const lastOddElement = index + 1 === cities.length && index % 2 === 0

    return <CityItem onCityEdit={editCityHandler} onCityDelete={removeCityHandler} index={index} key={index} data={city} fullWidth={lastOddElement} />
  })

  return (
    <Container>
      <CitiesForm editCityData={editCity} onNewCity={addCityHandler} />

      <div className="cities-list">
        {citiesListElement}
      </div>
    </Container>
  )
}

export default CitiesPage