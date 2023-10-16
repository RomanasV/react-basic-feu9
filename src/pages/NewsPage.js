import MainContent from '../Components/NewsPage/MainContent'
import SidebarContent from '../Components/NewsPage/SidebarContent'
import podcastImage from '../images/podcast-image-border-min.jpg'
import './NewsPage.css'

const NewsPage = () => {
  const newsSectionData = {
    mainNewsData: [
      {
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
        category: "AI & Deep learning",
        date: "2023-01-27",
        url: "/",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        imageAlt: "Test" ,
      },
      {
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
        category: "AI & Deep learning",
        date: "2023-01-27",
        url: "/",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        imageAlt: "Test" ,
      },
    ],
    secondaryNewsData: [
      {
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
        category: "AI & Deep learning",
        date: "2023-01-27",
        url: "/",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        imageAlt: "Test" ,
      },
      {
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
        category: "AI & Deep learning",
        date: "2023-01-27",
        url: "/",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        imageAlt: "Test" ,
      },
      {
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
        category: "AI & Deep learning",
        date: "2023-01-27",
        url: "/",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        imageAlt: "Test" ,
      },
      {
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
        category: "AI & Deep learning",
        date: "2023-01-27",
        url: "/",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        imageAlt: "Test" ,
      },
    ],
    newsSectionTitle: 'Naujienos',
    newsSectionButtonTitle: 'Visos naujienos'
  }

  const videoSectionData = {
    title: 'Vaizdo įrašai',
    subTitle: 'Jeigu galiu aš - gali ir tu!',
    buttonTitle: 'Visi vaizdo įrašai',
    videoUrl: 'https://www.youtube.com/embed/b8dGCsP75HA'
  }

  const podcastsSectionData = {
    title: 'Podcastai ir radijo laidos',
    podcastsList: [
      {
        imageSrc: podcastImage,
        imageAlt: "test" ,
        length: "8:55" ,
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
        date: "2021-02-20",
      },
      {
        imageSrc: podcastImage,
        imageAlt: "test" ,
        length: "8:55" ,
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
        date: "2021-02-20",
      },
      {
        imageSrc: podcastImage,
        imageAlt: "test" ,
        length: "8:55" ,
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
        date: "2021-02-20",
      },
      {
        imageSrc: podcastImage,
        imageAlt: "test" ,
        length: "8:55" ,
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
        date: "2021-02-20",
      },
    ]
  }

  const eventsSectionData = {
    title: 'Renginiai',
    buttonTitle: 'Daugiau',
    eventsListData: [
      {
        url: "/",
        title: "Big Data Conference Europe 2023",
        location: "Vilnius, Lithuana & Online",
        day: "21",
        month: "Lap",
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg",
        imageAlt: "test" ,
      },
      {
        url: "/",
        title: "Big Data Conference Europe 2023",
        month: "Lap",
      },
      {
        url: "/",
        title: "Big Data Conference Europe 2023",
        location: "Vilnius, Lithuana & Online",
        day: "21",
        month: "Lap",
      }
    ]
  }

  return (
    <div className="container">
      <div className="page-content-wrapper">
        <MainContent newsSectionData={newsSectionData} videoSectionData={videoSectionData} />
        <SidebarContent podcastsSectionData={podcastsSectionData} eventsSectionData={eventsSectionData} />
      </div>
    </div>
  )
}

export default NewsPage