import React from 'react';
import { Link } from 'react-router-dom';
import './contacts.css'; // Styles for Contacts

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contact Us</h2>
      <p>If you have any questions, please feel free to reach out to us.</p>
      <p>
        <Link to="/" className="contacts-link">Back to Home</Link>
      </p>
      <p>
        <Link to="/about" className="contacts-link">About Us</Link>
      </p>
      {/* Add more contact details or links here */}
    </div>
  );
};

export default Contacts;
