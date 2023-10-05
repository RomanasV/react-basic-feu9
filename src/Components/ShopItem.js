function ShopItem(props) {
  console.log(props)
  return (
    <div className="shop-item">
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
    </div>
  )
}

export default ShopItem