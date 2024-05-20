import React from "react";
import { ButtonContainer } from "./styles";

export interface IButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;

