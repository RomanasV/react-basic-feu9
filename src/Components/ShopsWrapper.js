import ShopsList from './ShopsList'

function ShopsWrapper(props) {
  return (
    <div className="shops-wrapper">
      <h1 className="page-title">Find us</h1>

      <ShopsList shopsData={props.shops} />
    </div>
  )
}

export default ShopsWrapper