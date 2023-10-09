import NewsItem from "./NewsItem"

const MainNews = () => {
  const data = [
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
  ]

  const mainNewsElement = data.map((item, index) => (
    <NewsItem 
      key={index}
      title={item.title}
      category={item.category}
      date={item.date}
      url={item.url}
      imageSrc={item.imageSrc}
      imageAlt={item.alt} 
    />
  ))

  return (
    <div className="main-news-list">
      {mainNewsElement}

      {/* <NewsItem 
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
      /> */}
    </div>
  )
}

export default MainNews