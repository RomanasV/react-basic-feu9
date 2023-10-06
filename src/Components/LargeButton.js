const LargeButton = (props) => {
  return (
    <div>
      {/* <a href="#" className="large-button">
        <span>Visos naujienos</span>
        <img src="arrow-icon.svg" alt="">
      </a> */}
      <a href={props.url} className="large-button">{props.title}</a>
    </div>
  )
}

export default LargeButton