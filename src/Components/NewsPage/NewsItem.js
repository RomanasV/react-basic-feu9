const NewsItem = (props) => {
  return (
    <div className="news-item">
      <a href={props.url}>
        <div className="image-wrapper">
          <img src={props.imageSrc} alt={props.imageAlt} />
        </div>

        <div className="news-item-content">
          <span className="news-item-category">{props.category}</span>
          <h2 className="news-item-title">{props.title}</h2>
          <span className="news-item-date">{props.date}</span>
        </div>
      </a>

    </div>
  )
}

export default NewsItem