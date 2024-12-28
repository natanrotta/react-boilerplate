import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import { Home, Login, Private } from "../pages";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/private"
          element={
            <ProtectedRoute>
              <Private />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
