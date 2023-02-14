import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "layout/default";
import HomePage from "pages/home";
import ProtectedRoute from "./components/ProtectedRoute";
import GamePage from "pages/game";
import LearnPage from "pages/learn";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="game"
            element={<ProtectedRoute children={<GamePage />} />}
          />
          <Route
            path=":id/learn"
            element={<ProtectedRoute children={<LearnPage />} />}
          />
        </Route>
        <Route path="*" element={<>404 Error</>} />
      </Routes>
    </Router>
  );
};

export default Routing;
