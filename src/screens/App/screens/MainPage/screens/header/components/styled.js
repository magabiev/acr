import styled from "styled-components";

export const HeaderParentBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderBlock = styled.div`
  display: flex;
  padding: 21px 0;
  position: relative;
`;
export const Logo = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-right: 25px;
  > span {
    color: #9d65c9;
  }
`;
export const ButtonHeader = styled.button`
  font-size: 20px;
  padding: 5px 20px;
  color: #9d65c9;
  border: 1px solid #9d65c9;
  border-radius: 5px;
  outline: none;
  background: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 4px #9d65c9;
  }
  &:active {
    border: 1px solid #9d65c9;
    outline: none;
    background: none;
  }
  &:disabled {
    cursor: auto;
    box-shadow: 0 0;
    opacity: 50%;
  }
`;
export const HeaderOtherOption = styled.div`
  color: #9d65c9;
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const Dropdown = styled.div`
  top: 50px;
  left: 20px;
  color: #9d65c9;
  overflow: hidden;
  cursor: pointer;
  background-color: #e5e5e5;
  border-radius: 0 0 10px 10px;
  position: absolute;
  transition: 0.2s;
  transform-origin: top;
  transform: scaleY(${(props) => (props.show && 1) || 0});
`;
export const DropdownItem = styled.div`
  padding: 5px 3px;
  transition: 0.2s;
  &:hover {
    background-color: #ccc1d5;
  }
`;
