import Card from '../Card/Card'
// import './ShopItem.css'
// import styles from './ShopItem.module.css'

import styled from 'styled-components'

const ShopContent = styled.div`
  .shop-title {
    margin-top: 0;
    font-size: 24px;
    margin-bottom: 16px;
  }

  .shop-contacts-list {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  .shop-contact-title {
    font-weight: 700;
  }
`

function ShopItem(props) {
  return (
    <Card borderRadius="large" className="shop-wrapper">
      {/* CSS/Scss modules */}
      {/* <div className="shop-item">
        <h2 className={styles.shopTitle}>{props.title}</h2>

        <ul className={styles.shopContactsList}>
          <li className="shop-contact-item">
            <span className={styles.shopContactTitle}>Phone:</span> 
            <a href={`tel:${props.phone}`}>{props.phone}</a>
          </li>

          <li className="shop-contact-item">
            <span className={styles.shopContactTitle}>Email:</span>
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </li>

          <li className="shop-contact-item">
            <span className={styles.shopContactTitle}>Address:</span> 
            <a href={props.mapLink} target="_blank" rel="noreferrer">{props.address}</a>
          </li>
        </ul>
      </div> */}

      {/* Styled-components */}
      <ShopContent>
        <h2 className="shop-title">{props.title}</h2>

        <ul className="shop-contacts-list">
          <li className="shop-contact-item">
            <span className="shop-contact-title">Phone:</span> 
            <a href={`tel:${props.phone}`}>{props.phone}</a>
          </li>

          <li className="shop-contact-item">
            <span className="shop-contact-title">Email:</span>
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </li>

          <li className="shop-contact-item">
            <span className="shop-contact-title">Address:</span> 
            <a href={props.mapLink} target="_blank" rel="noreferrer">{props.address}</a>
          </li>
        </ul>
      </ShopContent>
    </Card>
  )
}

export default ShopItem