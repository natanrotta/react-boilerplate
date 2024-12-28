import React from "react";
import { InputTextStyled } from "./styles";

interface InputTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, placeholder }) => {
  return <InputTextStyled type="text" value={value} onChange={onChange} placeholder={placeholder} />;
};

export default InputText;
