import EventsSection from './EventsSection'
import PodcastSection from './PodcastSection'

const SidebarContent = (props) => {
  const { podcastsSectionData, eventsSectionData } = props

  return (
    <aside className="sidebar-content">
      <PodcastSection data={podcastsSectionData} />

      <EventsSection data={eventsSectionData} />
    </aside>
  )
}

export default SidebarContent