import LargeButton from "../LargeButton"
import MainNews from "./MainNews"
import SecondaryNews from "./SecondaryNews"

const NewsSection = () => {
  return (
    <section className="news-section">
      <h1 className="page-title">Naujienos</h1>

      <MainNews />
      <SecondaryNews />
      <LargeButton url="/" title="Visos naujienos" hideArrow={true} />
    </section>
  )
}

export default NewsSection