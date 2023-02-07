import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import DefaultLayout from "../layout/default";
// import DefaultLayout from "../component/Layout/default";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
          <Route path="*" element={<>404 Error</>} />
      </Routes>
    </Router>
  );
};

export default Routing;
