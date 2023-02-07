import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="w-full float-right">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
