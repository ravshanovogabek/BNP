import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Styles for Navbar

const Navbar = () => {
  const [language, setLanguage] = useState('eng');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Implement language change logic here, such as updating context or making an API call
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-header">
        <Link to="/" className="navbar-item-link">
          <img src="https://bnpfabrik.vercel.app/assets/logo-DDXHFmis.png" alt="logo" className="navbar-logo" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        <li className="navbar-item"><Link className="navbar-item-link" to="/">Home</Link></li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/collection">Collection</Link></li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/about">About Us</Link></li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/contacts">Contact</Link></li>
        <li className="navbar-item language-item">
          <select value={language} onChange={handleLanguageChange} className="language-dropdown">
            <option value="eng">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
