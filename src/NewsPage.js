import MainContent from './Components/NewsPage/MainContent'
import SidebarContent from './Components/NewsPage/SidebarContent'
import './NewsPage.css'

const NewsPage = () => {
  return (
    <div className="container">
      <div className="page-content-wrapper">
        <MainContent />
        <SidebarContent />
      </div>
    </div>
  )
}

export default NewsPage