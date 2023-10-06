import React from 'react'

const EventItem = (props) => {
  return (
    <div className="event-item">
      <a href={props.url}>
        <div className="image-wrapper">
          <img src={props.imageSrc} alt={props.imageAlt} />
        </div>

        <div className="event-content">
          <div className="event-date">
            <span className="event-day">{props.day}</span>
            <span className="event-month">{props.month}</span>
          </div>

          <div className="event-info">
            <span className="event-location">{props.location}</span>
            <h3 className="event-title">{props.title}</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventItem