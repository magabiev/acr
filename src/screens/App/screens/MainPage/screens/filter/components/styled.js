import styled, { keyframes } from "styled-components";

export const FilterParent = styled.div`
  position: sticky;
  top: 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  > p {
    font-size: 20px;
    font-weight: 500;
  }
`;
export const FilterItem = styled.div`
  margin-bottom: 20px;
  position: relative;
  > p {
    font-size: 18px;
    margin: 11px 0;
  }
  > div {
    align-items: center;
    display: flex;
    margin-bottom: 15px;
    justify-content: ${(props) => props.justify};
    > div {
      margin-right: 10px;
    }
    > p {
      margin: 0;
      font-size: 18px;
    }
    &:after {
      display: ${(props) => (props.disable && "block") || "none"};
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background-color: white;
    }
  }
`;
const scaleCheckBox = keyframes`
  from{
    transform: scale(0.5);
  }
  to{
    transform: scale(1);
  }
`;
export const CheckBox = styled.div`
  border: 1px solid #9d65c9;
  border-radius: 5px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  display: flex;
  cursor: pointer;
  > i {
    margin: auto;
    color: #9d65c9;
    animation-name: ${(props) => props.checked && scaleCheckBox};
    animation-duration: 0.2s;
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
const scaleRadio = keyframes`
  from{
    transform: scale(1.5);
  }
  to{
    transform: scale(1);
  }
`;
export const Radio = styled(CheckBox)`
  border-radius: 50%;
  overflow: hidden;
  &:after {
    display: block;
    content: "";
    width: 70%;
    height: 70%;
    background-color: #9d65c9;
    border-radius: 50%;
    margin: auto;
    animation-name: ${(props) => props.checked && scaleRadio};
    animation-duration: 0.5s;
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
export const FormHint = styled.div`
  width: 102px;
  max-width: 100%;
  font-size: 16px;
  color: #d0d0d0;
  margin: 0 !important;
`;
export const FilterForm = styled.input`
  width: 80px;
  padding: 15px 10px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  font-size: inherit;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: 1px solid #9d65c9;
    outline: none;
  }
`;
