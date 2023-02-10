import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "layout/default";
import HomePage from "pages/home";

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
