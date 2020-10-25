import styled, { keyframes } from "styled-components";

const scaleTop = keyframes`
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1.1);
  }
  100%{
    transform: scaleY(1);
  }
`;
export const DebtInfoParent = styled.div`
  animation: ${scaleTop} 0.4s linear;
  width: 850px;
  padding-bottom: 20px;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  transform-origin: top;
  position: sticky;
`;
export const DebtAddItem = styled.div`
  > div {
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-size: 24px;
    padding-bottom: 20px;
    > i {
      cursor: pointer;
      &:hover {
        color: gray;
      }
    }
    > p {
      margin: 0;
      font-weight: 600;
    }
  }
`;
export const DebtAddForm = styled.input`
  width: ${(props) => props.width + "px"};
  max-width: 100%;
  padding: 20px;
  font-size: 18px;
  color: #adadad;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: 1px solid #9d65c9;
    outline: none;
  }
`;
export const PayMethodParent = styled.div`
  position: relative;
  > i {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;
export const PaymentMethod = styled.input`
  width: 235px;
  font-size: 18px;
  padding: 20px;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: 1px solid #9d65c9;
    outline: none;
  }
`;
export const PayMethodList = styled.div`
  background-color: #fff;
  position: absolute;
  font-size: 16px;
  border: 1px solid #d0d0d0;
  border-radius: 0 0 10px 10px;
  top: 40px;
  right: 15px;
  overflow: hidden;
  transform-origin: top;
  transition: 0.2s;
  transform: scaleY(${(props) => (props.show && 1) || 0});
  > div {
    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: whitesmoke;
    }
  }
`;
export const CommentForm = styled.textarea`
  padding: 20px;
  width: 535px;
  font-size: 18px;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  resize: none;
  height: 120px;
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: 1px solid #9d65c9;
    outline: none;
  }
`;
export const DateOfAdd = styled.div`
  margin-top: 20px;
  font-size: 18px !important;
  display: block;
  justify-content: normal !important;
  > div {
    margin-left: 10px;
    border: 1px solid white;
  }
`;
