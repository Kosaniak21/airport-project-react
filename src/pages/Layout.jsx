import React from 'react';

import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';
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
