import styled from 'styled-components';


interface ButtonContainerProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 42px;
  background-color: ${(props) => (props.disabled ? '#CCCCCC' : '#81259D')}; /* Altera a cor de fundo se o botão estiver desabilitado */
  color: #FFF;

  border: 1px solid #81259D;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; /* Altera o cursor se o botão estiver desabilitado */
  }
`;
