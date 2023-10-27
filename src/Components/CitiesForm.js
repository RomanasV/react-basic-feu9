import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../config'

const CitiesForm = (props) => {
  const { onNewCity, editCityData } = props
  
  const [name, setName] = useState('')
  const [population, setPopulation] = useState(0)
  const [continent, setContinent] = useState('')
  const [country, setCountry] = useState('')
  const [isCapital, setIsCapital] = useState(false)
  const [touristAttractions, setTouristAttractions] = useState([])
  const [continentOptions, setContinentOptions] = useState([])

  useEffect(() => {
    const getContinents = async () => {
      const { data } = await axios(`${API_URL}/continents`)
      setContinentOptions(data)
      setContinent(data[0].id)
    }

    getContinents()
  }, [])

  useEffect(() => {
    if (editCityData) {
      setName(editCityData.name)
      setPopulation(editCityData.population)
      setContinent(editCityData.location.continent)
      setCountry(editCityData.location.country)
      setIsCapital(editCityData.isCapital)
      setTouristAttractions(editCityData.touristAttractions)
    }
  }, [editCityData])

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

    onNewCity(newCity) 
  }

  const nameInputHandler = event => setName(event.target.value)
  const populationInputHandler = event => setPopulation(event.target.valueAsNumber)
  const continentInputHandler = event => setContinent(event.target.value)
  const countryInputHandler = event => setCountry(event.target.value)
  const capitalInputHandler = () => setIsCapital(prevState => !prevState)
  
  const touristAttractionsInputHandler = (event) => {
    const enteredValue = event.target.value

    if (!enteredValue) {
      setTouristAttractions([])
      return
    }

    const touristAttractionsArr = enteredValue.split(',')
    const updatedTouristAttractionsArr = touristAttractionsArr.map(location => {
      const trimmedLocation = location.trim()
      const updatedLocation = trimmedLocation.length > 0 ? trimmedLocation.at(0).toUpperCase() + trimmedLocation.slice(1) : ''
      return updatedLocation
    })

    setTouristAttractions(updatedTouristAttractionsArr)
  }

  return (
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
          {/* <input 
            type="text"
            id="continent" 
            name="continent" 
            value={continent}
            onChange={continentInputHandler}
          /> */}

          <select value={continent} onChange={continentInputHandler}>
            {continentOptions.map(continent => <option key={continent.id} value={continent.id}>{continent.name}</option>)}
          </select>
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

        <input type="submit" value={editCityData ? 'Edit City' : 'Create New City'} />
      </form>
  )
}

export default CitiesForm