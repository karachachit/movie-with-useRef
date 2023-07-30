import React from "react";
import { styled } from "styled-components";

const Button = ({ children, onClick, color }) => {
  return (
    <ButtonStyled onClick={onClick} style={{ background: `${color}` }}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  margin: 0.5px;
  padding: 12px 20px;
  border-radius: 4px;
  color: #fff;
  width: 8rem;
  height: 2rem;
  font-size: 16px;
  border: none;
`;
