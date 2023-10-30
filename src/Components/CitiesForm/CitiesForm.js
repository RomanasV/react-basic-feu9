import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'

import './CitiesForm.css'

import styled from 'styled-components'

import styles from './CitiesForm.module.css';

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 10px 0;

  &.form-control-inline {
    flex-direction: row;
  }

  label {
    font-weight: 600;
    color: green;
    font-size: 20px;
  }

  input {
    border: 2px solid orange;
    border-radius: 50px;
    padding: 5px 15px;

    &:focus {
      background-color: rgb(253, 237, 240);
    }
  }

  &.invalid {
    input {
      border-color: red;
      background-color: pink;
    }

    label {
      color: red;
    }
  }

  .input-error-message {
    color: red;
  }
`

const FormControlWithProps = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 10px 0;

  &.form-control-inline {
    flex-direction: row;
  }

  label {
    font-weight: 600;
    color: ${props => props.invalid ? 'red' : 'green'};
    font-size: 20px;
  }

  input {
    border: 2px solid ${props => props.invalid ? 'red' : 'orange'};
    border-radius: 50px;
    padding: 5px 15px;
    background-color: ${props => props.invalid ? 'pink' : 'transparent'};

    &:focus {
      background-color: rgb(253, 237, 240);
    }
  }

  .input-error-message {
    color: red;
  }
`

const CitiesForm = (props) => {
  const { onNewCity, editCityData } = props
  
  const [name, setName] = useState('')
  const [population, setPopulation] = useState(0)
  const [continent, setContinent] = useState('')
  const [country, setCountry] = useState('')
  const [isCapital, setIsCapital] = useState(false)
  const [touristAttractions, setTouristAttractions] = useState([])
  const [continentOptions, setContinentOptions] = useState([])

  const [nameError, setNameError] = useState('')
  const [populationError, setPopulationError] = useState(false)
  const [countryError, setCountryError] = useState('')
  const [invalidForm, setInvalidForm] = useState(false)

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

    setNameError('')
    setPopulationError(false)
    setCountryError('')
    setInvalidForm(false)

    let formIsValid = true

    if (!name) {
      setNameError('Name is required')
      formIsValid = false
    } else if (name.length < 3) {
      setNameError('Name must be at least 3 letters long')
      formIsValid = false
    }

    if (population < 50) {
      setPopulationError(true)
      formIsValid = false
    }

    if (!country) {
      setCountryError('Country is required')
      formIsValid = false
    } else if (country.length < 3) {
      setCountryError('Country must be at least 3 letters long')
      formIsValid = false
    }

    if (!formIsValid) {
      setInvalidForm(true)
      return
    }

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
        {/* 5. CSS Module */}
        <div className={`${styles.formControl} ${nameError && styles.invalid}`}>
          <label htmlFor="name">City name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name}
            onChange={nameInputHandler}
          />
          {nameError && <span className="input-error-message">{nameError}</span>}
        </div>

        {/* 1. Inline CSS sąlygos */}
        <div className="form-control">
          <label 
            htmlFor="name" 
            style={{ color: nameError ? 'red' : 'green' }}
          >
            City name:
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name}
            onChange={nameInputHandler}
            style={{
              borderColor: nameError ? 'red' : 'orange',
              backgroundColor: nameError ? 'pink' : 'transparent',
            }}
          />
          {nameError && <span className="input-error-message">{nameError}</span>}
        </div>

        {/* 2. Priklausomai nuo state keičiama klasė */}
        <div className={`form-control ${populationError ? 'invalid' : ''}`}>
          <label htmlFor="population">City population:</label>
          <input 
            type="number"
            min={0}
            step={1}
            id="population" 
            name="population" 
            value={population}
            onChange={populationInputHandler}
          />
          {populationError && <span className="input-error-message">Population has to be at least 50 people</span>}
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

        {/* 3. Styled Components */}
        {/* <FormControl className={`${countryError ? 'invalid' : ''}`}>
          <label htmlFor="country">City country:</label>
          <input 
            type="text"
            id="country" 
            name="country" 
            value={country}
            onChange={countryInputHandler}
          />
          {countryError && <span className="input-error-message">{countryError}</span>}
        </FormControl> */}

        {/* 4. Styled Components su props */}
        <FormControlWithProps invalid={countryError && 'invalid'} color="green">
          <label htmlFor="country">City country:</label>
          <input 
            type="text"
            id="country" 
            name="country" 
            value={country}
            onChange={countryInputHandler}
          />
          {countryError && <span className="input-error-message">{countryError}</span>}
        </FormControlWithProps>

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

        {invalidForm && (
          <div className="error-wrapper">
            <span className="input-error-message">Something is missing...</span>
          </div>
        )}
      </form>
  )
}

export default CitiesForm