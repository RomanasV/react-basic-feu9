import { v4 as uuid } from 'uuid'

import { useState } from 'react'
import Container from '../Components/Container/Container'
import CarForm from '../Components/CarForm'
import CarItem from '../Components/CarItem'

const CarsPage = () => {
  const carsData = [
    {
      id: uuid(),
      brand: 'Brand',
      model: 'Model',
      engine: 'electric',
      basePrice: 50000,
      mileage: 35000,
      image: '',
      color: 'black'
    },
    {
      id: uuid(),
      brand: 'Brand3',
      model: 'Model',
      engine: 'petrol',
      basePrice: 100000,
      mileage: 0,
      image: '',
      color: 'black'
    },
    {
      id: uuid(),
      brand: 'Brand4',
      model: 'Model',
      engine: 'diesel',
      basePrice: 85000,
      mileage: 54000,
      image: '',
      color: 'black'
    },
  ]

  const [cars, setCars] = useState(carsData)

  const removeCarHandler = (removeElementId) => {
    // setCars(prevState => {
    //   const newState = prevState.filter(item => item.id !== removeElementId)
    //   return newState
    // })

    setCars(prevState => prevState.filter(item => item.id !== removeElementId))
  }

  const newCarHandler = (newCar) => {
    setCars(prevState => [newCar, ...prevState])
  }

  return (
    <Container>
      <CarForm onNewCar={newCarHandler} />

      <div className="cars-list">
        {cars.map((car, index) => <CarItem onRemoveCar={removeCarHandler} data={car} key={index} />)}
      </div>
    </Container>
  )
}

export default CarsPage