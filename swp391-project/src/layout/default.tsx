import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header";
import Footer from "components/footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="container pt-[100px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
