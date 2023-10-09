import NewsSection from "./NewsSection"
import VideoSection from "./VideoSection"

const MainContent = (props) => {
  const { newsSectionData, videoSectionData } = props

  return (
    <main className="main-content">
      <NewsSection data={newsSectionData} />
      <VideoSection data={videoSectionData} />
    </main>
  )
}

export default MainContent