import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router-dom'
import './PageHeader.css'

const PageHeader = () => {
  return (
    <header>
      <div className='page-header'>
        <Container>
          <nav className='main-navigation'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <NavLink to='/'>Home</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/api/ai'>AI API</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/api/dogs'>Dogs API</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/api/chuck-norris'>Chuck API</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/todo'>Todo</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/cities'>Cities</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/counter'>Counter</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/cars'>Cars</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
      <div className='api-project-header'>
        <Container>
          <nav className='api-project-navigation'>
            <ul className='api-project-menu'>
              <li className='api-project-item'>
                <NavLink to='/api-project'>Main</NavLink>
              </li>

              <li className='api-project-item'>
                <NavLink to='/api-project/users'>Users</NavLink>
              </li>

              <li className='api-project-item'>
                <NavLink to='/api-project/posts'>Posts</NavLink>
              </li>

              <li className='api-project-item'>
                <NavLink to='/api-project/albums'>Albums</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default PageHeader