import ShopItem from "./ShopItem"

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
    <div className="shops-list">
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