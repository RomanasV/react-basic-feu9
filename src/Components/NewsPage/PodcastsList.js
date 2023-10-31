import { useContext } from 'react'
import PodcastItem from './PodcastItem'
import { SidebarContext } from '../../store/newsPageContext/sidebarContext'

const PodcastsList = () => {
  const ctx = useContext(SidebarContext)
  const data = ctx.podcasts.podcastsList

  const podcastsListElement = data.map((podcast, index) => <PodcastItem key={index} data={podcast} />)

  return (
    <div className="podcast-list">
      {podcastsListElement}
    </div>
  )
}

export default PodcastsList