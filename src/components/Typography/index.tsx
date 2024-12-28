import React from "react";
import { TypographyStyled } from "./styles";

interface TypographyProps {
  children: React.ReactNode; // Usando children ao invés de uma string fixa
}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <TypographyStyled>{children}</TypographyStyled>;
};

export default Typography;
