import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Pankaj_Maurya</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={handleLinkClick}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header