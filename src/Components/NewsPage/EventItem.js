import React from 'react'

const EventItem = (props) => {
  // const day = props.day
  // const month = props.month
  // const imageSrc = props.imageSrc
  // const imageAlt = props.imageAlt
  // const location = props.location
  // const title = props.title
  // const url = props.url

  const { day, month, imageAlt, imageSrc, location, title, url } = props

  if (!title || !url) {
    return
  }

  // let imageElement = ''
  
  // if (imageSrc) {
  //   imageElement = (
  //     <div className="image-wrapper">
  //       <img src={imageSrc} alt={imageAlt} />
  //     </div>
  //   )
  // }

  const imageElement = imageSrc && (
    <div className="image-wrapper">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )

  const dateElement = day && month && (
    <div className="event-date">
      <span className="event-day">{day}</span>
      <span className="event-month">{month}</span>
    </div>
  )

  const locationElement = location && <span className="event-location">{location}</span>

  return (
    <div className="event-item">
      <a href={url}>
        {imageElement}

        {/* {imageSrc && (
          <div className="image-wrapper">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )} */}

        <div className="event-content">
          {/* {day && month && (
            <div className="event-date">
              <span className="event-day">{day}</span>
              <span className="event-month">{month}</span>
            </div>
          )} */}

          {dateElement}

          <div className="event-info">
            {locationElement}
            {/* {location && <span className="event-location">{location}</span>} */}
            <h3 className="event-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventItem