import NewsItem from './NewsItem'

const SecondaryNews = (props) => {
  const { data } = props

  if (data.length === 0) {
    return
  }

  const newsElements = data.map((item, index) => <NewsItem key={index} data={item} />)

  return (
    <div className="secondary-news-list">
      {newsElements}
    </div>
  )
}

export default SecondaryNews