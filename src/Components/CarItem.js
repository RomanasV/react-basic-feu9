const CarItem = (props) => {
  const { data } = props

  console.log(data)

  return (
    <div className="car-item">
      <h2>{data.brand} ({data.model})</h2>
    </div>
  )
}

export default CarItem