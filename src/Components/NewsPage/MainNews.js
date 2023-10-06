import NewsItem from "./NewsItem"

const MainNews = () => {
  return (
    <div className="main-news-list">
      <NewsItem 
        title="Ar „ChatGPT“ užims mūsų darbo vietas?" 
        category="AI & Deep learning"
        date="2023-01-27"
        url="/"
        imageSrc="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" 
        imageAlt="Test" 
      />

      <NewsItem 
        title="Ar „ChatGPT“ užims mūsų darbo vietas!" 
        category="Deep learning"
        date="2023-01-30"
        url="/"
        imageSrc="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" 
        imageAlt="Test" 
      />
    </div>
  )
}

export default MainNews