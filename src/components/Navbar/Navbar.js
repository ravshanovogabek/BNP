import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Styles for Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-item-link">
            <img src="https://bnpfabrik.vercel.app/assets/logo-DDXHFmis.png" alt="logo" className="navbar-logo" />
          </Link>
        </li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/">Home</Link></li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/collection">Collection</Link></li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/about">About Us</Link></li>
        <li className="navbar-item"><Link className="navbar-item-link" to="/contact">Contact</Link></li>
      </ul>
      {/* Add language selector or other elements here */}
    </div>
  );
};

export default Navbar;
