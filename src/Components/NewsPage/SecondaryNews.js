import { useContext } from 'react'
import NewsItem from './NewsItem'
import { MainContext } from '../../store/newsPageContext/mainContext'

const SecondaryNews = () => {
  const ctx = useContext(MainContext)
  const { secondaryNewsData } = ctx.newsSectionData

  if (secondaryNewsData.length === 0) {
    return
  }

  const newsElements = secondaryNewsData.map((item, index) => <NewsItem key={index} data={item} />)

  return (
    <div className="secondary-news-list">
      {newsElements}
    </div>
  )
}

export default SecondaryNews