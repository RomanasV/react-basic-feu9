import PodcastItem from './PodcastItem'
import podcastImage from '../../podcast-image-border-min.jpg'

const PodcastsList = () => {
  return (
    <div className="podcast-list">

      <PodcastItem 
        imageSrc={podcastImage}
        imageAlt="test" 
        length="8:55" 
        title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
        date="2021-02-20"
      />

      <PodcastItem 
        imageSrc={podcastImage}
        imageAlt="test" 
        length="9:55" 
        title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas!" 
        date="2022-02-20"
      />

      <PodcastItem 
        imageSrc={podcastImage}
        imageAlt="test" 
        length="10:55" 
        title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
        date="2023-02-20"
      />

      <PodcastItem 
        imageSrc={podcastImage}
        imageAlt="test" 
        length="7:55" 
        title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
        date="2022-02-15"
      />

    </div>
  )
}

export default PodcastsList