import EventItem from "./EventItem"

const EventsList = (props) => {
  const { data } = props

  const eventsListElement = data.map((event, index) => <EventItem data={event} key={index} />)

  return (
    <div className="events-list">
      {eventsListElement}
    </div>
  )
}

export default EventsList