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
import PostsPage from './pages/api-project/PostsPage/PostsPage'
import PostPage from './pages/api-project/PostPage/PostPage'
import UserPage from './pages/api-project/UserPage/UserPage'
import AlbumPage from './pages/api-project/AlbumPage/AlbumPage'
import UsersPage from './pages/api-project/UsersPage/UsersPage'
import AlbumsPage from './pages/api-project/AlbumsPage/AlbumsPage'
import CreatePostPage from './pages/api-project/CreatePostPage/CreatePostPage'
import EditPostPage from './pages/api-project/EditPostPage/EditPostPage'
import CreateAlbumPage from './pages/api-project/CreateAlbumPage/CreateAlbumPage'
import MainPage from './pages/api-project/MainPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import EditAlbumPage from './pages/api-project/EditAlbumPage/EditAlbumPage'

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

        <Route path='/api-project' element={<MainPage />} />
        
        <Route path='/api-project/posts' element={<PostsPage />} />
        <Route path='/api-project/albums' element={<AlbumsPage />} />
        <Route path='/api-project/users' element={<UsersPage />} />
        <Route path='/api-project/posts/:id' element={<PostPage />} />
        <Route path='/api-project/create-post' element={<CreatePostPage />} />
        <Route path='/api-project/edit-post/:id' element={<EditPostPage />} />
        <Route path='/api-project/albums/:id' element={<AlbumPage />} />
        <Route path='/api-project/create-album' element={<CreateAlbumPage />} />
        <Route path='/api-project/edit-album/:id' element={<EditAlbumPage />} />
        <Route path='/api-project/users/:id' element={<UserPage />} />

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>

      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default App