import styled from "styled-components";

// Botão customizado
export const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
  &:focus {
    outline: none;
  }
`;
