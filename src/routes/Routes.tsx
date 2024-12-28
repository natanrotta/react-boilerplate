import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import { Home, Login, Private } from "../pages";

const AppRoutes: React.FC = () => {
  return (
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
  );
};

export default AppRoutes;
