const CityItem = (props) => {
  const { name, population, isCapital, touristAttractions, location } = props.data
  const { continent, country } = location

  console.log(name)
  console.log(population)
  console.log(isCapital)
  console.log(touristAttractions)
  console.log(continent)
  console.log(country)

  const description = `${name} city is located in ${continent}, ${country} and has population of ${population} people.`

  return (
    <div className='city-item capital'>
      <h2>{name} (capital)</h2>
      <p>{description}</p>

      <div className='tourist-attractions-wrapper'>
        <h3>Main Tourist attractions of {name} are:</h3>
        <ul>
          {touristAttractions.map((location, index) => <li key={index}>{location}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default CityItem