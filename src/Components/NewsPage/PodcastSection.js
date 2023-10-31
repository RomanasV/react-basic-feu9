import { useContext } from "react"
import SectionTitle from "../partials/SectionTitle"
import PodcastsList from "./PodcastsList"
import { SidebarContext } from "../../store/newsPageContext/sidebarContext"

const PodcastSection = () => {
  const ctx = useContext(SidebarContext)
  const { title } = ctx.podcasts

  return (
    <section className="podcast-section">
      <SectionTitle title={title} />
      <PodcastsList />
    </section>
  )
}

export default PodcastSection