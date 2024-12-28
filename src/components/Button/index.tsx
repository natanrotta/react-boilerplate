import React from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Usando children para permitir conteúdo dinâmico
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
