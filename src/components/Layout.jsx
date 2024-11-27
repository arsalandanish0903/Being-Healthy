import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MiniNavbar from "./MiniNavbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
    <MiniNavbar />
      <Navbar />
      <main>
        <Outlet /> {/* This is where nested routes will render */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
