import SectionTitle from "../partials/SectionTitle"
import PodcastsList from "./PodcastsList"

const PodcastSection = () => {
  return (
    <section className="podcast-section">
      <SectionTitle title="Podcastai ir radijo laidos" />
      <PodcastsList />
    </section>
  )
}

export default PodcastSection