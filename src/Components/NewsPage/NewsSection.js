import LargeButton from "../LargeButton"
import MainNews from "./MainNews"
import SecondaryNews from "./SecondaryNews"

const NewsSection = (props) => {
  const { mainNewsData, secondaryNewsData, newsSectionTitle, newsSectionButtonTitle } = props.data

  const titleElement = newsSectionTitle && <h1 className="page-title">{newsSectionTitle}</h1>

  return (
    <section className="news-section">
      {titleElement}

      <MainNews data={mainNewsData} />
      <SecondaryNews data={secondaryNewsData} />
      <LargeButton url="/" title={newsSectionButtonTitle} hideArrow={true} />
    </section>
  )
}

export default NewsSection