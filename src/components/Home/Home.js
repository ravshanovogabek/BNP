import React, {useEffect} from 'react';
import './home.css'; // Styles for Home
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
        {/* <ul className="hero-box-list">
          <li className="hero-box-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <img src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2769.613%27%20height=%2740%27%20viewBox=%270%200%2069.613%2040%27%3e%3cdefs%3e%3cstyle%3e.a{fill:%23f42c37;}%3c/style%3e%3c/defs%3e%3cg%20transform=%27translate(-5.009%20-24.149)%27%3e%3cg%20transform=%27translate(5.009%2024.149)%27%3e%3cpath%20class=%27a%27%20d=%27M76.464,52.063,74.559,41.837A10.444,10.444,0,0,0,64.3,33.349H54.944a10.449,10.449,0,0,0-10.343-9.2H20.71a8.031,8.031,0,0,0-6.933,3.912,1.123,1.123,0,0,0,1.922,1.16,5.8,5.8,0,0,1,5.011-2.826H44.6a8.189,8.189,0,0,1,8.17,8.078v22.2H33.911a6.34,6.34,0,0,0-12.483,0h-.719A5.843,5.843,0,0,1,15.862,54.1,1.123,1.123,0,0,0,14,55.361a8.084,8.084,0,0,0,6.708,3.559h.713a6.347,6.347,0,0,0,12.5,0H52.857a6.347,6.347,0,0,0,12.5,0h5.454a5.752,5.752,0,0,0,5.658-6.858ZM27.648,61.9a4.1,4.1,0,0,1,0-8.209,4.1,4.1,0,1,1,0,8.209Zm31.434,0A4.085,4.085,0,0,1,55,57.911a1.111,1.111,0,0,0,.012-.114v-.3a4.1,4.1,0,1,1,4.066,4.4Zm14.441-6.5a3.508,3.508,0,0,1-2.715,1.273h-5.46a6.38,6.38,0,0,0-6.264-5.227,6.265,6.265,0,0,0-4.065,1.5V35.594H64.3a8.2,8.2,0,0,1,8.05,6.656l1.906,10.231A3.523,3.523,0,0,1,73.523,55.4Z%27%20transform=%27translate(-6.957%20-24.149)%27%3e%3c/path%3e%3cpath%20class=%27a%27%20d=%27M18.105,40.6a1.123,1.123,0,0,0-1.123-1.123H6.132a1.123,1.123,0,0,0,0,2.245H16.983A1.123,1.123,0,0,0,18.105,40.6Z%27%20transform=%27translate(-5.009%20-27.619)%27%3e%3c/path%3e%3cpath%20class=%27a%27%20d=%27M18.941,51.984a1.123,1.123,0,0,0-1.123-1.123h-8a1.123,1.123,0,1,0,0,2.245h8A1.123,1.123,0,0,0,18.941,51.984Z%27%20transform=%27translate(-5.845%20-30.196)%27%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="logo2" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">Free Shipping</p>
              <p className="hero-box-navbar-text">Free shipping on all orders</p>
            </nav>
          </li>

          <li className="hero-box-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <img src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2748.579%27%20height=%2749.552%27%20viewBox=%270%200%2048.579%2049.552%27%3e%3cdefs%3e%3cstyle%3e.a,.b{fill:%23f42c37;}.a{stroke:%23fff;stroke-width:0.35px;}.b,.c{stroke:%23f42c37;}.b{stroke-width:0.3px;}.c,.e{fill:none;}.c{stroke-linecap:round;stroke-width:2.1px;stroke-dasharray:55%2010;}.d{stroke:none;}%3c/style%3e%3c/defs%3e%3cg%20transform=%27translate(-4.068%20-3.507)%27%3e%3cg%20transform=%27translate(4.254%203.682)%27%3e%3cpath%20class=%27a%27%20d=%27M52.96,31.59l-.876-1.208a1.631,1.631,0,0,1-.009-1.912l.855-1.219a4.107,4.107,0,0,0-1.409-5.99l-1.309-.7a1.636,1.636,0,0,1-.845-1.712l.251-1.469a4.1,4.1,0,0,0-3.865-4.782l-1.491-.06a1.627,1.627,0,0,1-1.5-1.179l-.432-1.42A4.114,4.114,0,0,0,36.76,7.306l-1.369.583a1.654,1.654,0,0,1-1.862-.412l-1-1.108a4.1,4.1,0,0,0-6.151.04l-.967,1.128a1.664,1.664,0,0,1-1.862.443l-1.38-.563a4.177,4.177,0,0,0-1.56-.312,4.108,4.108,0,0,0-3.957,3.02l-.393,1.439a1.635,1.635,0,0,1-1.49,1.2l-1.48.091a4.1,4.1,0,0,0-3.8,4.833l.272,1.46a1.636,1.636,0,0,1-.816,1.731l-1.3.725a4.106,4.106,0,0,0-1.319,6.01l.876,1.2a1.631,1.631,0,0,1,.009,1.912l-.856,1.219a4.108,4.108,0,0,0,1.409,5.99l1.309.7a1.635,1.635,0,0,1,.845,1.712l-.251,1.469A4.1,4.1,0,0,0,13.543,46.6l1.491.06a1.626,1.626,0,0,1,1.5,1.178l.412,1.43A4.113,4.113,0,0,0,22.514,51.9l1.368-.584a1.657,1.657,0,0,1,1.863.413l1,1.106a4.1,4.1,0,0,0,6.154-.04l.975-1.128a1.666,1.666,0,0,1,1.863-.443l1.379.564a4.2,4.2,0,0,0,1.561.312,4.105,4.105,0,0,0,3.956-3.02l.393-1.44a1.64,1.64,0,0,1,1.491-1.2l1.49-.09a4.1,4.1,0,0,0,3.8-4.832l-.272-1.46a1.636,1.636,0,0,1,.816-1.731l1.3-.726a4.1,4.1,0,0,0,1.319-6.01Zm-1.711,2.768a1.627,1.627,0,0,1-.8,1.079l-1.3.725A4.1,4.1,0,0,0,47.1,40.489l.272,1.46a1.636,1.636,0,0,1-1.52,1.933l-1.48.091a4.1,4.1,0,0,0-3.725,3.011l-.393,1.43a1.638,1.638,0,0,1-1.58,1.208,1.682,1.682,0,0,1-.625-.12l-1.38-.564a4.182,4.182,0,0,0-1.56-.313,4.121,4.121,0,0,0-3.1,1.409l-.977,1.119a1.618,1.618,0,0,1-1.239.563,1.6,1.6,0,0,1-1.217-.543l-1-1.108A4.119,4.119,0,0,0,24.52,48.7a4.054,4.054,0,0,0-1.621.332l-1.369.583a1.6,1.6,0,0,1-.643.132,1.642,1.642,0,0,1-1.571-1.179l-.412-1.43a4.115,4.115,0,0,0-3.767-2.96l-1.49-.06a1.588,1.588,0,0,1-1.2-.6,1.605,1.605,0,0,1-.342-1.3l.251-1.469a4.094,4.094,0,0,0-2.114-4.3l-1.308-.7a1.611,1.611,0,0,1-.826-1.068,1.579,1.579,0,0,1,.262-1.319l.856-1.219a4.094,4.094,0,0,0-.04-4.791l-.876-1.2a1.584,1.584,0,0,1-.272-1.319,1.627,1.627,0,0,1,.806-1.077l1.3-.725a4.1,4.1,0,0,0,2.043-4.33l-.262-1.449a1.609,1.609,0,0,1,.321-1.309,1.625,1.625,0,0,1,1.2-.623l1.48-.091A4.108,4.108,0,0,0,18.65,12.21l.393-1.439a1.638,1.638,0,0,1,1.58-1.209,1.7,1.7,0,0,1,.625.121l1.38.563a4.177,4.177,0,0,0,1.56.312,4.12,4.12,0,0,0,3.1-1.409l.977-1.117a1.637,1.637,0,0,1,2.456-.02l1,1.106a4.121,4.121,0,0,0,3.061,1.369,4.066,4.066,0,0,0,1.621-.332l1.369-.583a1.594,1.594,0,0,1,.643-.131,1.64,1.64,0,0,1,1.571,1.177l.412,1.431a4.115,4.115,0,0,0,3.767,2.959l1.49.061a1.623,1.623,0,0,1,1.208.6,1.6,1.6,0,0,1,.343,1.3l-.252,1.471a4.1,4.1,0,0,0,2.114,4.3l1.309.7a1.638,1.638,0,0,1,.574,2.385l-.855,1.219a4.1,4.1,0,0,0,.04,4.793l.876,1.2A1.773,1.773,0,0,1,51.249,34.357Z%27%20transform=%27translate(-5.545%20-5)%27%3e%3c/path%3e%3cpath%20class=%27b%27%20d=%27M48.05,42.37l-5.14,5.11L41.241,45.8a1.176,1.176,0,0,0-1.668,1.659l2.5,2.513a1.17,1.17,0,0,0,1.659,0l5.974-5.936A1.176,1.176,0,1,0,48.05,42.37Z%27%20transform=%27translate(-20.548%20-21.581)%27%3e%3c/path%3e%3c/g%3e%3cg%20class=%27c%27%20transform=%27translate(28.357%2047.837)%20rotate(-135)%27%3e%3ccircle%20class=%27d%27%20cx=%2713.835%27%20cy=%2713.835%27%20r=%2713.835%27%3e%3c/circle%3e%3ccircle%20class=%27e%27%20cx=%2713.835%27%20cy=%2713.835%27%20r=%2712.785%27%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="logo3" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">Return policy</p>
              <p className="hero-box-navbar-text">30-day money-back guarantee</p>
            </nav>
          </li>

          <li className="hero-box-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <img src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2749.231%27%20height=%2740%27%20viewBox=%270%200%2049.231%2040%27%3e%3cdefs%3e%3cstyle%3e.a{fill:%23f42c37;}.b{fill:none;stroke:%23f42c37;stroke-linecap:round;stroke-width:2.2px;}%3c/style%3e%3c/defs%3e%3cg%20transform=%27translate(-554%20-5045.521)%27%3e%3cpath%20class=%27a%27%20d=%27M48.077-22.546a4.9,4.9,0,0,0,1.154-3.221,4.9,4.9,0,0,0-1.154-3.221A5.122,5.122,0,0,0,45.1-30.767v-.1a4.655,4.655,0,0,0-3.077-4.712v-2.5a16.77,16.77,0,0,0-5.1-12.308,16.77,16.77,0,0,0-12.308-5.1,16.77,16.77,0,0,0-12.308,5.1,16.77,16.77,0,0,0-5.1,12.308v2.212a3.691,3.691,0,0,0-3.077,3.942v1.154a5.122,5.122,0,0,0-2.981,1.779A4.9,4.9,0,0,0,0-25.767a4.9,4.9,0,0,0,1.154,3.221,5.122,5.122,0,0,0,2.981,1.779v1.154a3.99,3.99,0,0,0,1.2,2.933,3.879,3.879,0,0,0,2.837,1.2h2.115a3.879,3.879,0,0,0,2.837-1.2,3.99,3.99,0,0,0,1.2-2.933V-31.921a3.99,3.99,0,0,0-1.2-2.933,3.879,3.879,0,0,0-2.837-1.2H9.231v-2.019A14.814,14.814,0,0,1,13.75-48.94a14.814,14.814,0,0,1,10.865-4.519A14.814,14.814,0,0,1,35.481-48.94,14.814,14.814,0,0,1,40-38.075v2.019a4.836,4.836,0,0,0-3.606,1.538,5.072,5.072,0,0,0-1.49,3.654v10.192a5.072,5.072,0,0,0,1.49,3.654A4.836,4.836,0,0,0,40-15.479a4.836,4.836,0,0,0,3.606-1.538,5.072,5.072,0,0,0,1.49-3.654v-.1A5.122,5.122,0,0,0,48.077-22.546ZM4.135-22.882a2.773,2.773,0,0,1-2.115-2.885,2.773,2.773,0,0,1,2.115-2.885Zm8.173-9.038v12.308a1.881,1.881,0,0,1-.625,1.442,2.007,2.007,0,0,1-1.394.577H8.173a2.007,2.007,0,0,1-1.394-.577,1.881,1.881,0,0,1-.625-1.442V-31.921a1.881,1.881,0,0,1,.625-1.442,2.007,2.007,0,0,1,1.394-.577h2.115a2.007,2.007,0,0,1,1.394.577A1.881,1.881,0,0,1,12.308-31.921Zm30.769,11.25a3.04,3.04,0,0,1-.865,2.163A2.913,2.913,0,0,1,40-17.594a2.913,2.913,0,0,1-2.212-.913,3.04,3.04,0,0,1-.865-2.163V-30.863a3.04,3.04,0,0,1,.865-2.163A2.913,2.913,0,0,1,40-33.94a2.913,2.913,0,0,1,2.212.913,3.04,3.04,0,0,1,.865,2.163ZM45.1-22.882v-5.769a2.773,2.773,0,0,1,2.115,2.885A2.773,2.773,0,0,1,45.1-22.882Z%27%20transform=%27translate(554%205101)%27%3e%3c/path%3e%3cpath%20class=%27b%27%20d=%27M12.482,1.811A13.234,13.234,0,0,0,0,1.375%27%20transform=%27matrix(0.998,%20-0.07,%200.07,%200.998,%20572.188,%205051.251)%27%3e%3c/path%3e%3c/g%3e%3c/svg%3e" alt="logo4" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">24/7 Support</p>
              <p className="hero-box-navbar-text">Round-the-clock technical support</p>
            </nav>
          </li>

          <li className="hero-box-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <img src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2744.03%27%20height=%2740.804%27%20viewBox=%270%200%2044.03%2040.804%27%3e%3cdefs%3e%3cstyle%3e.a,.b{fill:%23f42c37;stroke:%23f42c37;}.a{stroke-width:0.8px;}.b{stroke-linecap:round;stroke-width:2.6px;}%3c/style%3e%3c/defs%3e%3cg%20transform=%27translate(-4.6%20-8.021)%27%3e%3cpath%20class=%27a%27%20d=%27M10.951,43.533a.584.584,0,0,1-.576-.576V35.368a.576.576,0,1,1,1.153,0v7.541A.567.567,0,0,1,10.951,43.533ZM44.34,45.015V40.722a.584.584,0,0,0-.576-.576.62.62,0,0,0-.576.576v4.293a2.153,2.153,0,0,1-2.162,2.162H8.362A2.153,2.153,0,0,1,6.2,45.015V20.421A2.153,2.153,0,0,1,8.362,18.26H41.025a2.153,2.153,0,0,1,2.162,2.162v4a.584.584,0,0,0,.576.576.62.62,0,0,0,.576-.576v-4a3.372,3.372,0,0,0-3.362-3.362H8.362A3.372,3.372,0,0,0,5,20.421V45.063a3.372,3.372,0,0,0,3.362,3.362H41.025A3.4,3.4,0,0,0,44.34,45.015ZM48.23,33.342v-1.3a4.92,4.92,0,0,0-4.9-4.9H34.06a4.92,4.92,0,0,0-4.9,4.9v1.3a4.92,4.92,0,0,0,4.9,4.9h9.27A4.92,4.92,0,0,0,48.23,33.342Zm-4.9-5a3.731,3.731,0,0,1,3.7,3.7v1.3a3.731,3.731,0,0,1-3.7,3.7H34.06a3.731,3.731,0,0,1-3.7-3.7v-1.3a3.731,3.731,0,0,1,3.7-3.7h9.27ZM40.017,14.994a.618.618,0,0,0,.288-.817L37.759,8.749a.508.508,0,0,0-.336-.288.819.819,0,0,0-.48,0L25.751,13.745a.612.612,0,0,0,.528,1.1l10.615-5,2.306,4.9a.652.652,0,0,0,.528.336C39.872,15.042,39.968,15.042,40.017,14.994Z%27%20transform=%27translate(0%200)%27%3e%3c/path%3e%3cpath%20class=%27b%27%20d=%27M14.5-7.59H12.234%27%20transform=%27translate(29.267%2040.122)%27%3e%3c/path%3e%3c/g%3e%3c/svg%3e" alt="logo5" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">Secure Payment</p>
              <p className="hero-box-navbar-text">All payment methods accepted</p>
            </nav>
          </li>
        </ul> */}


{/* 
        <div className="header">
          <div className="container">
            <div className="header-list aos-init aos-animate" data-aos="fade-up">
              <h2 className="header-list-titles"><span className="titles-span">100%</span> <br />Material Quality</h2>
              <img src="https://bnpfabrik.vercel.app/assets/mebel2-1EUD4VC_.png" alt="Mebel2" className="header-mebel2 aos-init aos-animate" data-aos="fade-down" />
              <nav className="header-list-nav">
                <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
                <p className="header-list-text">A company that has been producing cotton fabrics for use worldwide for many years.</p>
                <button className="header-list-btn">Collection</button>
              </nav>
            </div>
          </div>



            <h2 className="header-title aos-init aos-animate" data-aos="fade-in">Winter Collection</h2>
            <p className="header-text">Buxoro tabiiy mahsuloti</p>
            <ul className="header-navbar">
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/1">
                  <img src="https://bnpfabrik.vercel.app/assets/kvadrat-Cmu75VqI.jpg" alt="Kvadratchalar" className="header-logo" />
                  <p className="header-navbar-text">Kvadratchalar</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/2">
                  <img src="https://bnpfabrik.vercel.app/assets/ikat-CQZ-Qy2u.jpg" alt="Ikat" className="header-logo" />
                  <p className="header-navbar-text">Ikat</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/3">
                  <img src="https://bnpfabrik.vercel.app/assets/davralar-J4ZKXgSr.jpg" alt="Davralar" className="header-logo" />
                  <p className="header-navbar-text">Davralar</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/4">
                  <img src="https://bnpfabrik.vercel.app/assets/geometriya-CSNEnk_7.jpg" alt="Geometriya kok" className="header-logo" />
                  <p className="header-navbar-text">Geometriya kok</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/5">
                  <img src="https://bnpfabrik.vercel.app/assets/tropik-DwuQOop4.jpg" alt="Tropik Barglar" className="header-logo" />
                  <p className="header-navbar-text">Tropik Barglar</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/6">
                  <img src="https://bnpfabrik.vercel.app/assets/bambi-KdA38_2S.jpg" alt="Bambi" className="header-logo" />
                  <p className="header-navbar-text">Bambi</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/7">
                  <img src="https://bnpfabrik.vercel.app/assets/vizant-BYxF_mM0.jpg" alt="Vizantiya" className="header-logo" />
                  <p className="header-navbar-text">Vizantiya</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/8">
                  <img src="https://bnpfabrik.vercel.app/assets/kechki-bog-_qV9ES4-.jpg" alt="Kechki Bog" className="header-logo" />
                  <p className="header-navbar-text">Kechki Bog</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/9">
                  <img src="https://bnpfabrik.vercel.app/assets/markiz-CtouN3PL.jpg" alt="Pat Markiz" className="header-logo" />
                  <p className="header-navbar-text">Pat Markiz</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Qish/10">
                  <img src="https://bnpfabrik.vercel.app/assets/logo15-ZjzY2vX3.jpg" alt="Lavanda atirgullari" className="header-logo" />
                  <p className="header-navbar-text">Lavanda atirgullari</p>
                </a>
              </li>
            </ul>


          <div className="container-1">
            <div className="header-list-kuz aos-init aos-animate" data-aos="fade-up">
              <h2 className="header-list-titles"><span className="titles-span">100%</span> <br />Material Quality</h2>
              <img src="https://bnpfabrik.vercel.app/assets/saplni3-4szaTxEe.png" alt="Mebel2" className="header-mebel2 aos-init aos-animate" data-aos="fade-down" />
              <nav className="header-list-nav">
                <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
                <p className="header-list-text">A company that has been producing cotton fabrics for use worldwide for many years.</p>
                <button className="header-list-btn">Collection</button>
              </nav>
            </div>
          </div>




            <h2 className="header-title aos-init aos-animate" data-aos="fade-in">Autumn Collection</h2>
            <p className="header-text">Buxoro tabiiy mahsuloti</p>
            <ul className="header-navbar">
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/1">
                  <img src="https://bnpfabrik.vercel.app/assets/safari-DrcxBVvc.jpg" alt="Safari" className="header-logo" />
                  <p className="header-navbar-text">Safari</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/2">
                  <img src="https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg" alt="Amerika" className="header-logo" />
                  <p className="header-navbar-text">Ko'prangli ametist</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/3">
                  <img src="https://bnpfabrik.vercel.app/assets/shivali-BZAnCCJl.jpg" alt="Ranglar" className="header-logo" />
                  <p className="header-navbar-text">Shivali bezak</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/4">
                  <img src="https://bnpfabrik.vercel.app/assets/zumrad-CNsYuEZU.jpg" alt="Fantaziya" className="header-logo" />
                  <p className="header-navbar-text">Zumrad</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/5">
                  <img src="https://bnpfabrik.vercel.app/assets/malxit-CQ6YjTi_.jpg" alt="Terezsah" className="header-logo" />
                  <p className="header-navbar-text">Malaxit qutisi</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/6">
                  <img src="https://bnpfabrik.vercel.app/assets/bahor-hid-WBi-IA65.jpg" alt="Sofiya" className="header-logo" />
                  <p className="header-navbar-text">Bahorning hidlari</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/7">
                  <img src="https://bnpfabrik.vercel.app/assets/Kuzgi-CbyWItoT.jpg" alt="Boz" className="header-logo" />
                  <p className="header-navbar-text">Kuzgi barglar tushishi</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/8">
                  <img src="https://bnpfabrik.vercel.app/assets/moviy-shab-DsQR-jk1.jpg" alt="Gulaboa" className="header-logo" />
                  <p className="header-navbar-text">Moviy Shabada</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/9">
                  <img src="https://bnpfabrik.vercel.app/assets/moviy-suv-DLTMaTXk.jpg" alt="Tropik" className="header-logo" />
                  <p className="header-navbar-text">Moviy suv</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Kuz/10">
                  <img src="https://bnpfabrik.vercel.app/assets/plaid-BqAYr5-k.jpg" alt="Gul" className="header-logo" />
                  <p className="header-navbar-text">Plaid</p>
                </a>
              </li>
            </ul>


          <div className="container-2">
            <div className="header-list-yozgi aos-init aos-animate" data-aos="fade-up">
              <h2 className="header-list-titles"><span className="titles-span">100%</span> <br />Material Quality</h2>
              <img src="https://bnpfabrik.vercel.app/assets/spalni2-DPKPhgnK.png" alt="Mebel2" className="header-mebel2 aos-init aos-animate" data-aos="fade-down" />
              <nav className="header-list-nav">
                <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
                <p className="header-list-text">A company that has been producing cotton fabrics for use worldwide for many years.</p>
                <button className="header-list-btn">Collection</button>
              </nav>
            </div>
          </div>




            <h2 className="header-title aos-init aos-animate" data-aos="fade-in">Summer Collection</h2>
            <p className="header-text">Buxoro tabiiy mahsuloti</p>
            <ul className="header-navbar">
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/1">
                  <img src="https://bnpfabrik.vercel.app/assets/vintage-DBsnYrAb.jpg" alt="Vintage uslubi" className="header-logo" />
                  <p className="header-navbar-text">Vintage uslubi</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/2">
                  <img src="https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg" alt="Sari" className="header-logo" />
                  <p className="header-navbar-text">Sari</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/3">
                  <img src="https://bnpfabrik.vercel.app/assets/fransuz-CKkLs_qZ.jpg" alt="Boz" className="header-logo" />
                  <p className="header-navbar-text">Boz</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/4">
                  <img src="https://bnpfabrik.vercel.app/assets/qoy-dolli-ic22Rpbk.jpg" alt="Sofiya" className="header-logo" />
                  <p className="header-navbar-text">Sofiya</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/5">
                  <img src="https://bnpfabrik.vercel.app/assets/alp-tog-uGTG4qjD.jpg" alt="100" className="header-logo" />
                  <p className="header-navbar-text">100%</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/6">
                  <img src="https://bnpfabrik.vercel.app/assets/ilhomlantiruvchi-TBRZKPn0.jpg" alt="Kat Kun" className="header-logo" />
                  <p className="header-navbar-text">Kat Kun</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/7">
                  <img src="https://bnpfabrik.vercel.app/assets/yashil-C_l_b14D.jpg" alt="Sirt Sur" className="header-logo" />
                  <p className="header-navbar-text">Sirt Sur</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/8">
                  <img src="https://bnpfabrik.vercel.app/assets/makka-CLa72Pku.jpg" alt="Zakovka" className="header-logo" />
                  <p className="header-navbar-text">Zakovka</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/9">
                  <img src="https://bnpfabrik.vercel.app/assets/Sakura-B5Tfvmwd.jpg" alt="Yozgi" className="header-logo" />
                  <p className="header-navbar-text">Yozgi</p>
                </a>
              </li>
              <li className="header-item aos-init aos-animate" data-aos="fade-in">
                <a href="/product/Yozgi/10">
                  <img src="https://bnpfabrik.vercel.app/assets/Zaytun-CC6OlZne.jpg" alt="Rang" className="header-logo" />
                  <p className="header-navbar-text">Rang</p>
                </a>
              </li>
            </ul>
          
        </div> */}
      </div>
    </div>
  );
};

export default Home;
