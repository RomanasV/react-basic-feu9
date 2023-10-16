import { Route, Routes } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'
import NewsPage from './pages/NewsPage'
import CounterPage from './pages/CounterPage'
import CitiesPage from './pages/CitiesPage'
import CarsPage from './pages/CarsPage'
import PageHeader from './Components/PageHeader/PageHeader'
import TodoPage from './pages/TodoPage/TodoPage'
import './App.css'

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

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>
    </div>
  )
}

export default App