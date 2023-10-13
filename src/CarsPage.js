import { useState } from 'react'
import Container from './Components/Container/Container'
import CarForm from './Components/CarForm'
import CarItem from './Components/CarItem'

const CarsPage = () => {
  const carsData = [
    {
      brand: 'Brand',
      model: 'Model',
      engine: 'electric',
      basePrice: 10000,
      mileage: 1000,
      image: '',
      color: 'black'
    },
    {
      brand: 'Brand3',
      model: 'Model',
      engine: 'electric',
      basePrice: 10000,
      mileage: 1000,
      image: '',
      color: 'black'
    },
    {
      brand: 'Brand4',
      model: 'Model',
      engine: 'electric',
      basePrice: 10000,
      mileage: 1000,
      image: '',
      color: 'black'
    },
  ]

  const [cars, setCars] = useState(carsData)

  const newCarHandler = (newCar) => {
    setCars(prevState => [newCar, ...prevState])
  }

  return (
    <Container>
      <CarForm onNewCar={newCarHandler} />

      <div className="cars-list">
        {cars.map((car, index) => <CarItem data={car} key={index} />)}
      </div>
    </Container>
  )
}

export default CarsPage