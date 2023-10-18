import { useEffect, useState } from "react"
import Container from "../../Components/Container/Container"

const DogsPage = () => {
  const [breeds, setBreeds] = useState([])
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const breedsData = await res.json()

      const breedsArr = Object.entries(breedsData.message)

      setBreeds(breedsArr)
    } 

    fetchBreeds()
  }, [])

  const breedOptions = breeds.map((breed, index) => {
    const mainBreed = breed[0]
    const subBreeds = breed[1]

    if (subBreeds.length > 0) {
      const subBreedOptions = subBreeds.map((subBreed, index) => (
        <option key={index} value={`${mainBreed}/${subBreed}`}>{mainBreed} ({subBreed})</option>
      ))

      return subBreedOptions
    } else {
      return <option key={index} value={mainBreed}>{mainBreed}</option>
    }
  })

  const photoHandler = async event => {
    event.preventDefault()

    const selectedBreed = event.target.breed.value
    const fetchUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
    
    const res = await fetch(fetchUrl)
    const image = await res.json()

    const imageSrc = image.message

    setImage(imageSrc)
  }

  return (
    <Container>
      <form onSubmit={photoHandler}>
        <div className="form-control">
          <label htmlFor="breed">Breed:</label>
          <select id="breed" name="breed">
            {breedOptions}
          </select>
        </div>

        <button type="submit">Get Photo</button>
      </form>

      {image && (
        <div className="image-wrapper">
          <img src={image} style={{width: '300px'}} alt="" />
        </div>
      )}
    </Container>
  )
}

export default DogsPage