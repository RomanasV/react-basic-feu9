const PodcastItem = (props) => {
  return (
    <div className="podcast-item">
      <div className="image-wrapper">
        <img src={props.imageSrc} alt={props.imageAlt} />
      </div>
      <span className="podcast-length">Trukmė: {props.length}</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{props.title}</h3>
        <span className="podcast-date">{props.date}</span>
      </div>
    </div>
  )
}

export default PodcastItem