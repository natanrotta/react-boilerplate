// src/App.tsx
import React from "react";
import AppRoutes from "./routes/Routes";
import { createGlobalStyle } from "styled-components";
import { Header } from "./components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: #333;
  }
`;

const App: React.FC = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Login", path: "/login" },
    { label: "Private", path: "/private" },
  ];

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header navItems={navItems} /> {/* Adicionando o Header aqui */}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
