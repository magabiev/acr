import styled from "styled-components";

export const SearchBlock = styled.div`
  width: 808px;
  padding: 11px 20px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${(props) => (props.focusBorder && "#9d65c9") || "#f1f1f1"};
  > i {
    font-size: 18px;
    cursor: pointer;
    transform: scaleY(${(props) => (props.showClear && 1) || 0});
  }
`;
export const SearchForm = styled.input`
  width: 90%;
  border: none;
  font-size: 18px;
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
