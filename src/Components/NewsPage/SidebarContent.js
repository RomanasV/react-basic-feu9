import EventsSection from './EventsSection'
import PodcastSection from './PodcastSection'

const SidebarContent = () => {
  return (
    <aside className="sidebar-content">
      <PodcastSection />
      <EventsSection />
    </aside>
  )
}

export default SidebarContent