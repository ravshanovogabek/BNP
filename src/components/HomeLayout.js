import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import HomeItem from './HomeItem/HomeItem';

function HomeLayout() {
  return (
    <div>
      <Home />
      <HomeItem/>
      <Header />
    </div>
  );
}

export default HomeLayout;
