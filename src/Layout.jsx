import React from 'react';
import Header from './components/Headers/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
