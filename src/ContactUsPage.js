import MapWrapper from './Components/MapWrapper'
import ShopsWrapper from './Components/ShopsWrapper'
import './ContactUsPage.css'

function ContactUsPage() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <ShopsWrapper />
        <MapWrapper />
      </div>
    </div>
  )
}

export default ContactUsPage