import styled from "styled-components";

// Estilos do Header
export const StyledHeader = styled.header`
  background-color: #007bff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;

  h1 {
    margin: 0;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 20px;
  font-size: 1rem;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
