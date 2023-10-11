const CityItem = (props) => {
  const { fullWidth } = props
  const { name, population, isCapital, touristAttractions, location } = props.data
  const { continent, country } = location

  let capitalClass = ''
  let titleElement = name
  let capitalDescription = ''

  if (isCapital) {
    capitalClass = 'capital'
    titleElement = `${name} (capital)`
    capitalDescription = ` ${name} is the capital of ${country}.`
  }

  // const capitalClass = isCapital ? 'capital' : ''

  // let titleElement = name

  // if (isCapital) {
  //   titleElement += ' (capital)'
  // }

  // const titleElement = isCapital ? `${name} (capital)` : name

  // const capitalDescription = isCapital ? ` ${name} is the capital of ${country}.` : ''

  const descriptionElement = `${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescription}`

  let touristAttractionsElement = ''

  if (touristAttractions.length > 0) {
    // let touristAttractionsTitle = `Main Tourist attractions of ${name} are:`

    // if (touristAttractions.length === 1) {
    //   touristAttractionsTitle = `Main Tourist attraction of ${name} is:`
    // }

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
    </div>
  )
}

export default CityItem