import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen m-0">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
