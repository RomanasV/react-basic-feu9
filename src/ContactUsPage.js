import Container from './Components/Container/Container'
import MapWrapper from './Components/MapWrapper/MapWrapper'
import ShopsWrapper from './Components/ShopsWrapper'
import './ContactUsPage.css'

function ContactUsPage() {
  const shopsData = [
    {
      title: "Parduotuve 1" ,
      phone: "+370456465461" ,
      email: "shop1@parduotuve.lt",
      address: "Rotušės aikštė 1, Kaunas",
      mapLink: "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
    },
    {
      title: "Parduotuve 2" ,
      phone: "+370456465461" ,
      email: "shop1@parduotuve.lt",
      address: "Rotušės aikštė 1, Kaunas",
      mapLink: "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
    },
    {
      title: "Parduotuve 3" ,
      phone: "+370456465461" ,
      email: "shop1@parduotuve.lt",
      address: "Rotušės aikštė 1, Kaunas",
      mapLink: "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
    },
    {
      title: "Parduotuve 4" ,
      phone: "+370456465461" ,
      email: "shop1@parduotuve.lt",
      address: "Rotušės aikštė 1, Kaunas",
      mapLink: "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
    },
  ]

  return (
    <Container>
      <div className="content-wrapper">
        <ShopsWrapper shops={shopsData} />
        <MapWrapper />
      </div>
    </Container>
  )
}

export default ContactUsPage