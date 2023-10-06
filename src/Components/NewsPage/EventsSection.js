import LargeButton from "../LargeButton"
import SectionTitle from "../partials/SectionTitle"
import EventsList from "./EventsList"

const EventsSection = () => {
  return (
    <section className="events-section">
      <SectionTitle title="Renginiai" />

      <EventsList />

      <LargeButton title="Daugiau" url="/" />
    </section>
  )
}

export default EventsSection