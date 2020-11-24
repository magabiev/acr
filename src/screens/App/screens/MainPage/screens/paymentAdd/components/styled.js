import styled from "styled-components";

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
export const PaymentMethodForm = styled.input`
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
export const PaymentAddNotificationBlock = styled.div`
  position: fixed;
  &.alert-enter {
    opacity: 0;
  }
  &.alert-enter-active {
    opacity: 1;
    transition: 1s;
  }
  &.alert-exit {
    opacity: 1;
    transition: 1s;
  }
  &.alert-exit-active {
    opacity: 0;
    transition: 1s;
  }
`;
