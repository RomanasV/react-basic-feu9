import Card from '../Card/Card';
import './MapWrapper.css'

export default function MapWrapper() {
  return (
    <div className="map-wrapper">
      <Card>
        <iframe 
          title='Shops map list'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4415.413961192272!2d23.887974!3d54.896914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e1!3m2!1sen!2slt!4v1692951629686!5m2!1sen!2slt" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </div>
  )
}