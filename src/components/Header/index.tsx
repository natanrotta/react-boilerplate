import React from "react";
import { Link } from "react-router-dom"; // Usando Link para navegação
import { NavItem, NavList, StyledHeader } from "./styles";

type HeaderProps = {
  navItems: { label: string; path: string }[]; // Lista de itens de navegação
};

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <StyledHeader>
      <h1>My App</h1>
      <NavList>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <Link to={item.path}>{item.label}</Link>
          </NavItem>
        ))}
      </NavList>
    </StyledHeader>
  );
};

export default Header;
