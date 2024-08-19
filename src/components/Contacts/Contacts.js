import React from 'react';
import './contacts.css'; // Styles for Contacts

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contact-list">
        <nav className="contact-item">
          <h3 className="contact-title">Contact</h3>
          <form className="contact-input-container">
            <input
              type="email"
              required
              className="contacts-input"
              placeholder="Your email address"
            /><br />
            <input
              type="tel"
              className="contacts-input"
              placeholder="Your phone number"
            /><br />
            <input
              type="text"
              required
              className="contacts-input-text"
              placeholder="Your message here"
            /><br />
            <button className="contact-btn">Submit</button>
          </form>
        </nav>
        <iframe
          title="Bukhara Natural Product Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484413.1768652228!2d64.5298351514944!3d39.77318183514678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3d8cf9ddfc54b1%3A0x1d72bdf7d151f24!2z0JrQvtC-0LLQvtCz0LDRjCDQkNHRt9C-0JLQvtC-0LLQ!5e0!3m2!1sen!2s!4v1631123456789"
          className="contact-kart"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
