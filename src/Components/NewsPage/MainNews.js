import { useContext } from "react"
import NewsItem from "./NewsItem"
import { MainContext } from "../../store/newsPageContext/mainContext"

const MainNews = () => {
  const ctx = useContext(MainContext)
  const { mainNewsData } = ctx.newsSectionData

  if (mainNewsData.length === 0) {
    return
  }

  const mainNewsElement = mainNewsData.map((item, index) => <NewsItem key={index} data={item} />)

  return (
    <div className="main-news-list">
      {mainNewsElement}
    </div>
  )
}

export default MainNews