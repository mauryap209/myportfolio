import React, { useState } from 'react'
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
          <a href="/">Pankaj_Maurya</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={handleLinkClick}>Home</a>
          </li>
          <li className="nav-item">
            <a href="./page/about" className="nav-link" onClick={handleLinkClick}>About</a>
          </li>
          <li className="nav-item">
            <a href="./page/contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
          </li>
          <li className="nav-item">
            <a href="./page/services" className="nav-link" onClick={handleLinkClick}>Services</a>
          </li>
          <li className="nav-item">
            <a href="./page/login" className="nav-link" onClick={handleLinkClick}>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header