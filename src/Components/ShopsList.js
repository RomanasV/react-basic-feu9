import ShopItem from "./ShopItem"

function ShopsList() {
  return (
    <div className="shops-list">
      <ShopItem 
        title="Parduotuve 1" 
        phone="+370456465461" 
        email="shop1@parduotuve.lt"
        address="Rotušės aikštė 1, Kaunas"
        mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
      />

      <ShopItem 
        title="Parduotuve 2" 
        phone="+370456465462" 
        email="shop2@parduotuve.lt"
        address="Rotušės aikštė 1, Kaunas"
        mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
      />

      <ShopItem 
        title="Parduotuve 3" 
        phone="+370456465463" 
        email="shop3@parduotuve.lt"
        address="Rotušės aikštė 1, Kaunas"
        mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
      />

      <ShopItem 
        title="Parduotuve 4" 
        phone="+370456465464" 
        email="shop41@parduotuve.lt"
        address="Rotušės aikštė 1, Kaunas"
        mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
      />
    </div>
  )
}

export default ShopsList