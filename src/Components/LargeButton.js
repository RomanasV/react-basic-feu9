// import arrow from '../arrow-icon.svg'

const LargeButton = (props) => {
  const { title, url, hideArrow } = props

  if (!title || !url) {
    return
  }

  return (
    <>
      <a href={url} className="large-button">
        <span>{title}</span>
        {/* {!hideArrow && <img src={arrow} alt="arrow icon" />} */}
        {!hideArrow && <svg xmlns='http://www.w3.org/2000/svg' width='19' height='33'><path d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fillRule='evenodd'/></svg>}
      </a>
      {/* <a href={props.url} className="large-button">{props.title}</a> */}
    </>
  )
}

export default LargeButton