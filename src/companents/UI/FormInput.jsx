import { forwardRef } from "react";
import { styled } from "styled-components";

const Input = forwardRef(({ labelName, id, inputType }, ref) => {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <InputStyle type={inputType} id={id} ref={ref} />
    </>
  );
});
export default Input;

const InputStyle = styled.input`
  width: 350px;
  height: 35px;
  outline: none;
  margin: 10px 0 10px 0;
`;
