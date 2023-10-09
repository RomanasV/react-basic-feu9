import PodcastItem from './PodcastItem'

const PodcastsList = (props) => {
  const { data } = props

  const podcastsListElement = data.map((podcast, index) => <PodcastItem key={index} data={podcast} />)

  return (
    <div className="podcast-list">
      {podcastsListElement}
    </div>
  )
}

export default PodcastsList