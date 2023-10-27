import axios from 'axios'
import { useState, useEffect } from 'react'
import Container from '../../Components/Container/Container'
import CarForm from '../../Components/CarForm'
import CarItem from '../../Components/CarItem'
import { toast } from 'react-toastify'
import { API_URL } from '../../config'

const CarsPage = () => {
  // const carsData = [
  //   {
  //     id: uuid(),
  //     brand: 'Brand',
  //     model: 'Model',
  //     engine: 'electric',
  //     basePrice: 50000,
  //     mileage: 35000,
  //     image: '',
  //     color: 'black',
  //     discount: ''
  //   },
  //   {
  //     id: uuid(),
  //     brand: 'Brand3',
  //     model: 'Model',
  //     engine: 'petrol',
  //     basePrice: 100000,
  //     mileage: 0,
  //     image: '',
  //     color: 'black',
  //     discount: ''
  //   },
  //   {
  //     id: uuid(),
  //     brand: 'Brand4',
  //     model: 'Model',
  //     engine: 'diesel',
  //     basePrice: 85000,
  //     mileage: 54000,
  //     image: '',
  //     color: 'black',
  //     discount: ''
  //   },
  // ]

  const [cars, setCars] = useState([])
  const [editCar, setEditCar] = useState(null)

  useEffect(() => {
    const getCars = async () => {
      const { data } = await axios(`${API_URL}/cars?_sort=id&_order=desc&_expand=engineType&_expand=color`)
      setCars(data)
    }

    getCars()
  }, [])

  const removeCarHandler = removeElementId => {
    axios.delete(`${API_URL}/cars/${removeElementId}`)
    setCars(prevState => prevState.filter(item => item.id !== removeElementId))

    toast.error('Car was removed')
  }

  const editCarHandler = editCarId => {
    const selectedEditCar = cars.find(car => car.id === editCarId)
    setEditCar(selectedEditCar)
  }

  const newCarHandler = async newCar => {
    if (editCar) {
      await axios.put(`${API_URL}/cars/${editCar.id}`, newCar)
      const { data } = await axios(`${API_URL}/cars/${editCar.id}?_expand=engineType&_expand=color`)

      setCars(prevState => {
        const editCarId = data.id
        const editCarIndex = prevState.findIndex(car => car.id === editCarId)
        const newState = [...prevState]
        newState[editCarIndex] = data

        setEditCar(null)
        return newState
      })

      toast.success('Car was edited')
    } else {
      const { data } = await axios.post(`${API_URL}/cars`, newCar)
      const carRes = await axios(`${API_URL}/cars/${data.id}?_expand=engineType&_expand=color`)

      setCars(prevState => [carRes.data, ...prevState])
      toast.success('Car was created')
    }
  }

  return (
    <Container>
      <CarForm editCarData={editCar} onNewCar={newCarHandler} />

      <div className="cars-list">
        {cars.map(car => <CarItem onEditCar={editCarHandler} onRemoveCar={removeCarHandler} data={car} key={car.id} />)}
      </div>
    </Container>
  )
}

export default CarsPage