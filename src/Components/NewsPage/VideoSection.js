import LargeButton from "../LargeButton"

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2 className="section-title">Vaizdo įrašai</h2>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <h3 className="section-sub-title">Jeigu galiu aš - gali ir tu!</h3>

      {/* <a href="/" className="large-button">Visi vaizdo įrašai</a> */}
      <LargeButton url="/" title="Visi vaizdo įrašai" />
    </section>
  )
}

export default VideoSection