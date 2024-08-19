import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-navbar">
        <li
          className="footer-nav-item aos-init aos-animate"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <img src="https://bnpfabrik.vercel.app/assets/logo-DDXHFmis.png" alt="Logo" className="footer-logo" />
          <p className="footer-nav-item-text">
            The company 'Bukhara Natural Product' has been producing cotton fabrics
            for global use for many years.
          </p>
        </li>
        <li
          className="footer-nav-item aos-init aos-animate"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h4 className="footer-nav-item-title">Menu</h4>
          <a href="/">Home</a> <br /><a href="/about">About Us</a> <br /><a
            href="/collection"
            >Collection</a
          >
          <br /><a href="/contacts">Contact</a>
        </li>
        <li
          className="footer-nav-item aos-init aos-animate"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h4 className="footer-nav-item-title">Contact</h4>
          <p className="footer-item-nav-text">Bukhara, st. Alpomish 80.</p>
          <p className="footer-item-nav-text">Bnpuz@bk.ru</p>
          <p className="footer-item-nav-text">bnp_fabrik</p>
          <p className="footer-item-nav-text">info@bnpfabric.com</p>
          <a href="tel:+998 93 383 75 85" className="footer-nav-link"
            >+998 93 383 75 85</a
          >
          <br /><a href="tel:+998 93 960 78 00" className="footer-nav-link"
            >+998 93 960 78 00</a
          >
        </li>
        <li
          className="footer-nav-item aos-init aos-animate"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h4 className="footer-nav-item-title">Subscribe to our newsletter</h4>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your e-mail"
              className="email-input"
            /><button type="submit" className="subscribe-button">Follow us</button>
          </form>
        </li>
      </ul>

      <p>&copy; 2024 E-commerce App</p>
    </footer>
  );
};

export default Footer;
