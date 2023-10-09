const NewsItem = (props) => {
  const { title, category, date, url, imageSrc, imageAlt } = props.data
  
  if (!title || !url) {
    return
  }

  const imageElement = imageSrc && (
    <div className="image-wrapper">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )

  const categoryElement = category && <span className="news-item-category">{category}</span>

  const dateElement = date && <span className="news-item-date">{date}</span>

  return (
    <div className="news-item">
      <a href={url}>
        {imageElement}

        <div className="news-item-content">
          {categoryElement}
          <h2 className="news-item-title">{title}</h2>
          {dateElement}
        </div>
      </a>

    </div>
  )
}

export default NewsItem