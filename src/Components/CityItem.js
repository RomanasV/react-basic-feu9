const CityItem = (props) => {
  const { fullWidth, onCityDelete, index, onCityEdit } = props
  const { name, population, isCapital, touristAttractions, location } = props.data
  const { continent, country } = location

  if (!name || !continent || !country) {
    return
  }

  let capitalClass = ''
  let titleElement = name
  let capitalDescription = ''

  if (isCapital) {
    capitalClass = 'capital'
    titleElement = `${name} (capital)`
    capitalDescription = ` ${name} is the capital of ${country}.`
  }

  const descriptionElement = `${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescription}`

  let touristAttractionsElement = ''

  if (touristAttractions.length > 0) {
    const touristAttractionsTitle = touristAttractions.length === 1 ? `Main Tourist attraction of ${name} is:` : `Main Tourist attractions of ${name} are:`

    touristAttractionsElement = (
      <div className='tourist-attractions-wrapper'>
        <h3>{touristAttractionsTitle}</h3>
        <ul>
          {touristAttractions.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>
    )
  }

  let lastItemClass = fullWidth ? 'last-city-item' : ''

  return (
    <div className={`city-item ${capitalClass} ${lastItemClass}`}>
      <h2>{titleElement}</h2>
      <p>{descriptionElement}</p>
      {touristAttractionsElement}

      <button onClick={() => onCityDelete(index)}>Remove</button>
      <button onClick={() => onCityEdit(index)}>Edit</button>
    </div>
  )
}

export default CityItem