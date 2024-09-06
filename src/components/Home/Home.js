import React, {useEffect} from 'react';
import './home.css'; 
import AOS from 'aos';


import 'aos/dist/aos.css';





const Home = () => {
  useEffect(() => {
     AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="hero-box">
        <img 
          src="https://bnpfabric-woad.vercel.app/assets/hero-D_tj0uTK.png" 
          alt="Spalni" 
          className="hero-image" 
        />
        <div className="hero-content">
          <h1 className="hero-title">Bukhara</h1>
          <p className="hero-subtitle">Natural Products</p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
