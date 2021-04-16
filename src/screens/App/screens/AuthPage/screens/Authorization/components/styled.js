import styled from "styled-components";

export const AuthBlock = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 10px 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  @media (max-width: 499px) {
    box-shadow: 0 0;
  }
`;
export const AuthHeader = styled.div`
  padding: 30px 0 25px 0;
  font-size: 20px;
  font-weight: 700;
`;
export const WrongData = styled.div`
  color: #e4588a;
  font-size: 16px;
  padding: 10px 0;
  visibility: ${(props) => props.show || "hidden"};
`;
export const LoginForm = styled.input`
  margin-bottom: 20px;
  padding: 15px 10px;
  width: 90%;
  max-width: 90%;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  font-size: 18px;
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: 1px solid #9d65c9;
    outline: none;
  }
`;
export const PasswordBlock = styled.div`
  padding: 15px 10px;
  border-radius: 10px;
  font-size: 18px;
  border: 1px solid ${(props) => (props.focusBorder ? "#9d65c9" : "#f1f1f1")};
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: auto;
  width: 90%;
  max-width: 95%;
`;
export const PasswordForm = styled.input`
  width: 90%;
  border: none;
  font-size: inherit;
  &::placeholder {
    color: #d0d0d0;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
export const ShowPassword = styled.div`
  width: 10%;
  justify-content: flex-end;
  padding-right: 10px;
  display: flex;
  color: ${(props) => (props.iconColor ? "#9d65c9" : "#d0d0d0")};
  cursor: pointer;
`;
