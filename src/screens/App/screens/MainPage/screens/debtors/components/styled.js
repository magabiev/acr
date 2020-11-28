import styled from "styled-components";

export const StickySearch = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 10;
  position: sticky;
  top: -1px;
  transition: 0.2s;
  background-color: #e5e5e5;
`;
export const DebtorParent = styled.div`
  width: 850px;
  max-width: 100%;
`;
export const Debtors = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: relative;
  &:before {
    border-radius: 10px;
    content: "";
    display: ${(props) => (props.disabled ? "block" : "none")};
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #e5e5e5;
    opacity: 0.5;
  }
`;
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
  position: relative;
  &:first-child {
    margin-top: 20px;
  }
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
export const DebtorNameBlock = styled.div`
  font-size: 26px;
  font-weight: bold;
  > i {
    margin-left: 10px;
    color: ${(props) => (props.check ? "#4bdc26" : "#ed940e")};
  }
`;
export const DebtorOpenIcon = styled.div`
  display: flex;
  width: 5%;
  align-items: center;
  overflow-y: hidden;
  > .open-arrow {
    transition: 0.2s;
    transform: translate(-70px);
    color: #9d65c9;
  }
`;
