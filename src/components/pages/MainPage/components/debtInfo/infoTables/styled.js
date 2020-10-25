import styled from "styled-components";

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
