import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const Root = () => {
  return (
    <div className="mx-auto">
      <NavBar></NavBar>
      <Loading></Loading>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
