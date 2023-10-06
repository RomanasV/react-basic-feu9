import EventItem from "./EventItem"

const EventsList = () => {
  return (
    <div className="events-list">
      <EventItem
        url="/"
        title="Big Data Conference Europe 2023"
        location="Vilnius, Lithuana & Online"
        day="21"
        month="Lap"
        imageSrc="https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg"
        imageAlt="test" 
      />
            
      <EventItem
        url="/"
        title="Big Data Conference Europe 2023"
        location="Vilnius, Lithuana & Online"
        day="21"
        month="Lap"
      />

      <EventItem
        url="/"
        title="Big Data Conference Europe 2023"
        location="Vilnius, Lithuana & Online"
        day="21"
        month="Lap"
      />
    </div>
  )
}

export default EventsList