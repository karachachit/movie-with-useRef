import React from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

export const Backdrop = ({ onClick }) => {
  return;
  <>
    {createPortal(
      <StyledBackdrop onClick={onClick} />,
      document.getElementById("backdrop")
    )}
  </>;
};

function Modal({ onClose, children }) {
  return (
    <>
      {createPortal(
        <>
          <StyledBackdrop onClick={onClose} />
          <ModalStyle>{children}</ModalStyle>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0px;
  left: 0px;
  z-index: 10;
`;

const ModalStyle = styled.div`
  background-color: #fff;
  padding: 30px;
  width: 400px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 15px;
`;
