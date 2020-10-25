import styled from "styled-components";

export const DebtorBlock = styled.div`
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  width: 810px;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    .open-arrow {
      transform: translate(0px);
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;
export const DebtorInfo = styled.div`
  > p {
    color: #adadad;
    font-size: 20px;
    margin: 10px 0 0 0;
  }
`;
export const DebtorName = styled.div`
  font-size: 26px;
  font-weight: bold;
  > .check {
    margin-left: 10px;
    color: #4bdc26;
  }
  > .warning {
    color: #ed940e;
    margin-left: 10px;
  }
`;
export const DebtorOpenIcon = styled.div`
  display: flex;
  width: 5%;
  align-items: center;
  > .open-arrow {
    transition: 0.2s;
    transform: translate(70px);
    color: #9d65c9;
  }
`;
