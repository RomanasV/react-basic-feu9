import { v4 as uuid } from 'uuid'

import { useState } from 'react'
import Container from '../../Components/Container/Container'
import CarForm from '../../Components/CarForm'
import CarItem from '../../Components/CarItem'

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
      color: 'black',
      discount: ''
    },
    {
      id: uuid(),
      brand: 'Brand3',
      model: 'Model',
      engine: 'petrol',
      basePrice: 100000,
      mileage: 0,
      image: '',
      color: 'black',
      discount: ''
    },
    {
      id: uuid(),
      brand: 'Brand4',
      model: 'Model',
      engine: 'diesel',
      basePrice: 85000,
      mileage: 54000,
      image: '',
      color: 'black',
      discount: ''
    },
  ]

  const [cars, setCars] = useState(carsData)
  const [editCar, setEditCar] = useState(null)

  const removeCarHandler = removeElementId => {
    // setCars(prevState => {
    //   const newState = prevState.filter(item => item.id !== removeElementId)
    //   return newState
    // })

    setCars(prevState => prevState.filter(item => item.id !== removeElementId))
  }

  const editCarHandler = editCarId => {
    const selectedEditCar = cars.find(car => car.id === editCarId)
    setEditCar(selectedEditCar)
  }

  const newCarHandler = newCar => {
    if (editCar) {
      setCars(prevState => {
        const editCarId = newCar.id
        const editCarIndex = prevState.findIndex(car => car.id === editCarId)
        const newState = [...prevState]
        newState[editCarIndex] = newCar

        setEditCar(null)
        return newState
      })
    } else {
      setCars(prevState => [newCar, ...prevState])
    }
  }

  return (
    <Container>
      <CarForm editCarData={editCar} onNewCar={newCarHandler} />

      <div className="cars-list">
        {cars.map((car, index) => <CarItem onEditCar={editCarHandler} onRemoveCar={removeCarHandler} data={car} key={index} />)}
      </div>
    </Container>
  )
}

export default CarsPage