import { useContext } from "react"
import EventItem from "./EventItem"
import { SidebarContext } from "../../store/newsPageContext/sidebarContext"

const EventsList = () => {
  const ctx = useContext(SidebarContext)
  const data = ctx.events.eventsListData

  const eventsListElement = data.map((event, index) => <EventItem data={event} key={index} />)

  return (
    <div className="events-list">
      {eventsListElement}
    </div>
  )
}

export default EventsList