import LargeButton from "../LargeButton"

const VideoSection = (props) => {
  const { title, subTitle, buttonTitle, videoUrl } = props.data

  if (!videoUrl) {
    return
  }

  const titleElement = title && <h2 className="section-title">{title}</h2>
  const subTitleElement = subTitle && <h3 className="section-sub-title">{subTitle}</h3>

  return (
    <section className="video-section">
      {titleElement}

      <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      {subTitleElement}
      
      <LargeButton url="/" title={buttonTitle} />
    </section>
  )
}

export default VideoSection