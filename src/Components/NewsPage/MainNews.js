import NewsItem from "./NewsItem"

const MainNews = (props) => {
  const { data } = props

  if (data.length === 0) {
    return
  }

  const mainNewsElement = data.map((item, index) => <NewsItem key={index} data={item} />)

  return (
    <div className="main-news-list">
      {mainNewsElement}
    </div>
  )
}

export default MainNews