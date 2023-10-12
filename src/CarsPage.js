import { useState } from 'react'
import Container from './Components/Container/Container'

const CarsPage = () => {
  const [selectedColor, setSelectedColor] = useState('black')
  const [customColor, setCustomColor] = useState('')

  const colorHandler = (event) => setSelectedColor(event.target.value)
  const customColorHandler = (event) => setCustomColor(event.target.value)

  const newCarHandler = (event) => {
    event.preventDefault()

    // let pickedColor = selectedColor

    // if (selectedColor === 'other') {
    //   pickedColor = customColor
    // }
    
    const pickedColor = selectedColor === 'other' ? customColor : selectedColor

    const newCar = {
      color: pickedColor
    }

    console.log(newCar)
  }

  return (
    <Container>
      <form onSubmit={newCarHandler}>
        <div className="form-control">
          <label htmlFor="color">Color:</label>
          <select id="color" name="color" onChange={colorHandler} value={selectedColor}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="silver">Silver</option>
            <option value="white">White</option>
            <option value="special blue">Special Blue</option>
            <option value="other">Other</option>
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

        <button type="submit">Submit</button>

      </form>
    </Container>
  )
}

export default CarsPage