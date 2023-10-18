import { v4 as uuid } from 'uuid'

import { useEffect, useState } from 'react'

const CarForm = (props) => {
  const { onNewCar, editCarData } = props

  const engineTypes = ['petrol', 'electric', 'diesel', 'hybrid']
  const defaultEngine = engineTypes[0]

  const colorOptions = ['black', 'red', 'blue', 'silver', 'white', 'special blue', 'other']

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [engine, setEngine] = useState(defaultEngine)
  const [basePrice, setBasePrice] = useState('')
  const [mileage, setMileage] = useState('')
  const [image, setImage] = useState('')
  const [selectedColor, setSelectedColor] = useState('black')
  const [customColor, setCustomColor] = useState('')
  const [discount, setDiscount] = useState('')

  useEffect(() => {
    if (editCarData) {
      const { brand, basePrice, color, engine, image, mileage, model, discount, customColor } = editCarData
      setBrand(brand)
      setModel(model)
      setBasePrice(basePrice)
      setEngine(engine)
      setImage(image)
      setMileage(mileage)
      setDiscount(discount)
      
      if (customColor) {
        setSelectedColor('other')
        setCustomColor(color)
      } else {
        setSelectedColor(color)
      }
    }
  }, [editCarData])

  const colorHandler = (event) => setSelectedColor(event.target.value)
  const customColorHandler = (event) => setCustomColor(event.target.value)

  const newCarHandler = (event) => {
    event.preventDefault()

    // let pickedColor = selectedColor

    // if (selectedColor === 'other') {
    //   pickedColor = customColor
    // }
    
    const pickedColor = selectedColor === 'other' ? customColor : selectedColor

    const id = editCarData ? editCarData.id : uuid()

    const newCar = {
      id,
      brand,
      model,
      engine,
      basePrice,
      mileage,
      image,
      discount,
      color: pickedColor,
      customColor: selectedColor === 'other'
    }

    setBrand('')
    setModel('')
    setEngine(defaultEngine)
    setMileage('')
    setBasePrice('')
    setImage('')
    setCustomColor('')
    setSelectedColor('black')
    setDiscount('')

    onNewCar(newCar)
  }

  const brandInputHandler = event => setBrand(event.target.value)
  const modelInputHandler = event => setModel(event.target.value)
  const basePriceInputHandler = event => setBasePrice(event.target.value)
  const mileageInputHandler = event => setMileage(event.target.value)
  const imageInputHandler = event => setImage(event.target.value)
  const engineInputHandler = event => setEngine(event.target.value)
  const discountInputHandler = event => setDiscount(event.target.value)

  return (
    <form onSubmit={newCarHandler}>
      <div className="form-control">
        <label htmlFor="brand">Brand:</label>
        <input 
          type="text" 
          id="brand" 
          name="brand"
          value={brand}
          onChange={brandInputHandler}
        />
      </div>

      <div className="form-control">
        <label htmlFor="model">Model:</label>
        <input 
          type="text" 
          id="model" 
          name="model"
          value={model}
          onChange={modelInputHandler}
        />
      </div> 

      <div className="form-control">
        <label htmlFor="base-price">Base Price:</label>
        <input 
          type="number"
          min={0}
          id="base-price" 
          name="base-price"
          value={basePrice}
          onChange={basePriceInputHandler}
        />
      </div> 

      <div className="form-control">
        <label htmlFor="mileage">Mileage:</label>
        <input 
          type="number"
          min={0}
          id="mileage" 
          name="mileage"
          value={mileage}
          onChange={mileageInputHandler}
        />
      </div> 

      <div className="form-control">
        <label htmlFor="image">Image:</label>
        <input 
          type="text"
          min={0}
          id="image" 
          name="image"
          value={image}
          onChange={imageInputHandler}
        />
      </div>

      <div className="form-control">
        <label htmlFor="engine">Engine:</label>
        <select id="engine" name="engine" value={engine} onChange={engineInputHandler}>
          {engineTypes.map((type, index) => <option value={type} key={index}>{type}</option>)}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="color">Color:</label>
        <select id="color" name="color" onChange={colorHandler} value={selectedColor}>
          {colorOptions.map((color, index) => <option key={index} value={color}>{color}</option>)}
        </select>
      </div>

      {selectedColor === 'other' && (
        <div className="form-control">
          <label htmlFor="custom-color">Enter your custom color:</label>
          <input 
            type="text" 
            id="custom-color" 
            name="custom-color"
            value={customColor}
            onChange={customColorHandler}
          />
        </div>
      )}

      <div className="form-control">
        <label htmlFor="discount">Discount:</label>
        <input 
          type="number"
          min={0}
          max={100}
          id="discount" 
          name="discount"
          value={discount}
          onChange={discountInputHandler}
        />
      </div> 

      <button type="submit">{editCarData ? 'Edit' : 'New'}</button>

    </form>
  )
}

export default CarForm