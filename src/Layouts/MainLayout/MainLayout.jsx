import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Home from '../../views/Home/Home';

const MainLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout;
