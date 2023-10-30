import Container from '../Components/Container/Container'
import MapWrapper from '../Components/MapWrapper/MapWrapper'
import ShopsWrapper from '../Components/ShopsWrapper'
// import './ContactUsPage.css'
// import styles from './ContactUsPage.module.css'
// import './ContactUsPage.scss'
// import styles from './ContactUsPage.module.scss'

import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 999px) {
    grid-template-columns: 3fr 2fr;
  }

  @media (max-width: 799px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`

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
      {/* Įprastas CSS */}
      {/* <div className="content-wrapper">
        <ShopsWrapper shops={shopsData} />
        <MapWrapper />
      </div> */}

      {/* CSS Modules */}
      {/* <div className={styles['content-wrapper']}>
        <ShopsWrapper shops={shopsData} />
        <MapWrapper />
      </div> */}

      {/* <div className={styles.contentWrapper}>
        <ShopsWrapper shops={shopsData} />
        <MapWrapper />
      </div> */}

      {/* Style-components */}
      <ContentWrapper>
        <ShopsWrapper shops={shopsData} />
        <MapWrapper />
      </ContentWrapper>
    </Container>
  )
}

export default ContactUsPage