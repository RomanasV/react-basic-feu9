import LargeButton from "../LargeButton"
import EventsList from "./EventsList"

const EventsSection = () => {
  return (
    <section className="events-section">
      <h2 className="section-title">Renginiai</h2>

      <EventsList />

      <LargeButton title="Daugiau" url="/" />
    </section>
  )
}

export default EventsSection