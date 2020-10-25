import styled from "styled-components";

export const DebtHeaderItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  position: sticky;
  z-index: 10;
  top: 20px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const DebtClose = styled.div`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: gray;
  }
`;
