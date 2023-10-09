const PodcastItem = (props) => {
  const { date, imageAlt, imageSrc, length, title } = props.data

  return (
    <div className="podcast-item">
      <div className="image-wrapper">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <span className="podcast-length">Trukmė: {length}</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{title}</h3>
        <span className="podcast-date">{date}</span>
      </div>
    </div>
  )
}

export default PodcastItem