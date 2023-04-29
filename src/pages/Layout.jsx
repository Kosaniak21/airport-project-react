import React from 'react';

import Footer from '../main/footer/Footer';
import Header from '../main/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
