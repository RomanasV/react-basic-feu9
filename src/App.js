import { Link, Route, Routes } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'
import NewsPage from './pages/NewsPage'
import CounterPage from './pages/CounterPage'
import CitiesPage from './pages/CitiesPage/CitiesPage'
import CarsPage from './pages/CarsPage/CarsPage'
import PageHeader from './Components/PageHeader/PageHeader'
import TodoPage from './pages/TodoPage/TodoPage'
import './App.css'
import APIChickNorrisPage from './pages/APIChuckNorrisPage/APIChickNorrisPage'
import DogsPage from './pages/DogsPage/DogsPage'
import AIPage from './pages/AIPage/AIPage'

function App() {
  return (
    <div>
      <PageHeader />

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/code-academy/news' element={<NewsPage />} />
        <Route path='/code-academy/contacts' element={<ContactUsPage />} />
        <Route path='/api/chuck-norris' element={<APIChickNorrisPage />} />
        <Route path='/api/dogs' element={<DogsPage />} />
        <Route path='/api/ai' element={<AIPage />} />

        <Route path='/api-project' element={
          <div>
            <h1>Home page:</h1>
            <div>
              <Link to='/api-project/posts'>Posts</Link>
            </div>
            <div>
              <a href='/api-project/posts'>Posts</a>
            </div>
          </div>
        } />
        <Route path='/api-project/posts' element={<h1>Posts page:</h1>} />
        <Route path='/api-project/albums' element={<h1>Albums page:</h1>} />
        <Route path='/api-project/users' element={<h1>Users page:</h1>} />
        <Route path='/api-project/posts/1' element={<h1>Single post page:</h1>} />
        <Route path='/api-project/albums/1' element={<h1>Single album page:</h1>} />
        <Route path='/api-project/users/1' element={<h1>Single user page:</h1>} />

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>
    </div>
  )
}

export default App