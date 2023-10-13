import ContactUsPage from './ContactUsPage'
import NewsPage from './NewsPage'
import CounterPage from './CounterPage'
import CitiesPage from './CitiesPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CarsPage from './CarsPage'
import PageHeader from './Components/PageHeader/PageHeader'

function App() {
  return (
    <div>
      <PageHeader />

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/code-academy/news' element={<NewsPage />} />
        <Route path='/code-academy/contacts' element={<ContactUsPage />} />

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>
    </div>
  )
}

export default App