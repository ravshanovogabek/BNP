import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeLayout from './components/HomeLayout';
import Collection from './components/Collection/Collection';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import './App.css';
import ContactLayout from './components/ContactLayout';

function App() {
  return (
    <Router>
      <div class>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactLayout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
