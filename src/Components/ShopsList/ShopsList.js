import ShopItem from '../ShopItem/ShopItem'
// import './ShopsList.css'
import styles from './ShopsList.module.css'

function ShopsList(props) {
  const { shopsData } = props
  // const shopsListElement = shopsData.map((shop, index) => (
  //   <ShopItem 
  //     key={index}
  //     title={shop.title} 
  //     phone={shop.phone}
  //     email={shop.email}
  //     address={shop.address}
  //     mapLink={shop.mapLink}
  //   />
  // ))

  return (
    <div className={styles.shopsList}>
      {/* {shopsListElement} */}

      {shopsData.map((shop, index) => (
        <ShopItem
          key={index}
          title={shop.title} 
          phone={shop.phone}
          email={shop.email}
          address={shop.address}
          mapLink={shop.mapLink}
        />
      ))}
    </div>
  )
}

export default ShopsList