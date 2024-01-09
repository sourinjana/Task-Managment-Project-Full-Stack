import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderComponent() {
  return (

    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-3" href="#">Task Management System</a>

        <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        </ul>
        </div>
          </nav>
    </header>
  )
}

export default HeaderComponent