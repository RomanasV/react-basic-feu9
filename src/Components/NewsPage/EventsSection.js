import LargeButton from "../LargeButton"
import SectionTitle from "../partials/SectionTitle"
import EventsList from "./EventsList"

const EventsSection = (props) => {
  const { eventsListData, title, buttonTitle } = props.data

  return (
    <section className="events-section">
      <SectionTitle title={title} />

      <EventsList data={eventsListData} />

      <LargeButton title={buttonTitle} url="/" />
    </section>
  )
}

export default EventsSection