import { useContext } from "react"
import LargeButton from "../LargeButton"
import MainNews from "./MainNews"
import SecondaryNews from "./SecondaryNews"
import { MainContext } from "../../store/newsPageContext/mainContext"

const NewsSection = () => {
  const ctx = useContext(MainContext)

  const { newsSectionTitle, newsSectionButtonTitle } = ctx.newsSectionData

  const titleElement = newsSectionTitle && <h1 className="page-title">{newsSectionTitle}</h1>

  return (
    <section className="news-section">
      {titleElement}

      <MainNews />
      <SecondaryNews />
      
      <LargeButton url="/" title={newsSectionButtonTitle} hideArrow={true} />
    </section>
  )
}

export default NewsSection