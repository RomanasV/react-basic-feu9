import { useContext } from "react"
import LargeButton from "../LargeButton"
import SectionTitle from "../partials/SectionTitle"
import EventsList from "./EventsList"
import { SidebarContext } from "../../store/newsPageContext/sidebarContext"

const EventsSection = () => {
  const ctx = useContext(SidebarContext)
  const { title, buttonTitle } = ctx.events

  return (
    <section className="events-section">
      <SectionTitle title={title} />

      <EventsList />

      <LargeButton title={buttonTitle} url="/" />
    </section>
  )
}

export default EventsSection