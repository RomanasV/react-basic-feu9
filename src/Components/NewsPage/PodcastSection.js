import SectionTitle from "../partials/SectionTitle"
import PodcastsList from "./PodcastsList"

const PodcastSection = (props) => {
  const { podcastsList, title } = props.data

  return (
    <section className="podcast-section">
      <SectionTitle title={title} />
      <PodcastsList data={podcastsList} />
    </section>
  )
}

export default PodcastSection