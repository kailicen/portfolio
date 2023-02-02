import React, { useState } from "react";
import './styles.css';   
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuState, setMenuState] = useState<string>('closed');

  const handleMenuOpen = () => {
    setMenuState('open');
  }

  const handleMenuClose = () => {
    setMenuState('closed');
  }

    return (
      <nav>
        <div className="navbar-desktop">
          <ul>
          <li className="navbar-desktop__brand">
            <img className="navbar-desktop__logo" src='logo192-white.png' alt='logo' />
            <Link to="/" className="navbar-desktop__name">Kaili Cen</Link>
          </li>
          <li>
            <Link to="/posts">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to='/booknotes'>Book Notes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        </div>
        <div className="navbar-mobile">
          <div className="navbar-mobile__brand">
            <img className="navbar-mobile__logo" src='logo192-white.png' alt='logo' />
            <Link to="/" className="navbar-mobile__name">Kaili Cen</Link>
          </div>
          <button className="navbar-mobile__button navbar-mobile__button_sticky" onClick={handleMenuOpen}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {menuState === 'open' && (
            <div className="navbar-mobile__menu-overlay">
              <div className="navbar-mobile__brand">
                <img className="navbar-mobile__logo" src='logo192-white.png' alt='logo' />
                <Link to="/" className="navbar-mobile__name" onClick={handleMenuClose}>Kaili Cen</Link>
              </div>
              <ul>
              <li>
                <Link to="/posts" onClick={handleMenuClose}>Blog</Link>
              </li>
              <li>
                <Link to="/projects" onClick={handleMenuClose}>Projects</Link>
              </li>
              <li>
                <Link to='/booknotes' onClick={handleMenuClose}>Book Notes</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleMenuClose}>About</Link>
              </li>
              </ul>
              <button className="navbar-mobile__button" onClick={handleMenuClose}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          )}
        </div>
        
      </nav>
    );
  };
  
  export default Navbar;