import styled, { keyframes } from "styled-components";

const slide_left = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100%{
     transform: translateY(0);
  }
`;
export const DebtInfoMain = styled.div`
  animation: ${slide_left} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  width: 850px;
  max-width: 100%;
  border-radius: 10px;
  background-color: white;
`;
export const DebtInfoParent = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;
export const DebtHeaderParent = styled.div`
  width: 850px;
  max-width: 100%;
  position: sticky;
  overflow-x: hidden;
  top: -1px;
  transition: 0.2s;
  z-index: 10;
  padding-bottom: 10px;
`;
export const DebtHeaderContent = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  transition: 0.2s;
`;
export const DebtHeaderItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  > div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;
    &:first-child {
      margin-top: 0;
    }
  }
`;
export const DebtInfoContent = styled.div`
  overflow-x: hidden;
  width: 100%;
  padding-bottom: 20px;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  border-radius: 0 0 10px 10px;
  transform-origin: top;
  position: sticky;
`;

export const DebtClose = styled.div`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: gray;
  }
`;

export const DebtContactInfoItem = styled.div`
  font-size: 18px;
  color: #adadad;
  display: flex;
  align-items: center;
  > i {
    margin-right: 10px;
  }
  > div {
    margin-left: 10px;
    border: 1px solid white;
  }
`;

export const DebtNameItem = styled.div`
  font-size: 32px;
  font-weight: 600;
  > i {
    margin-left: 10px;
    color: #4bdc26;
  }
`;

export const TableHeader = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  > p {
    cursor: pointer;
    display: flex;
    align-items: center;
    > i {
      transition: 0.2s;
      transform: rotate(${(props) => (props.open && "90deg") || "0deg"});
    }
  }
  > div {
    font-weight: normal;
    border: 1px solid white;
  }
`;
export const Table = styled.div`
  padding: 0 20px;
  transition: 0.2s;
  transform-origin: top;
  transform: scaleY(${(props) => (props.open && "1") || "0"});
  height: auto;
  max-height: ${(props) => (props.open && "1000px") || "0px"};
  overflow: hidden;
  > div {
    border-bottom: 1px solid #f1f1f1;
    &:first-child {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
export const TableItem = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 20px 0;
  > div {
    flex: 2;
    &:first-child {
      flex: 1;
    }
    &:last-child {
      flex: 3;
      display: flex;
      align-items: center;
      > .material-icons {
        color: ${(props) => (props.completed && "#4BDC26") || "#D0D0D0"};
        text-align: end;
        width: 100%;
        font-size: 16px;
      }
    }
  }
`;

export const PaymentHistoryItem = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0 20px;
`;
