import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen m-0 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
