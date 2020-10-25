import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e5e5e5;
  @media (max-width: 499px) {
    background: #ffffff;
  }
`;
export const AuthBlockParent = styled.div`
  margin: auto;
  width: 500px;
  max-width: 100%;
`;
export const AuthBlock = styled.div`
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
  padding: 75px 0 25px 0;
  font-size: 20px;
  font-weight: 700;
`;
export const WrongData = styled.div`
  color: #e4588a;
  font-size: 16px;
  padding: 10px 0;
  visibility: ${(props) => props.show || "hidden"};
`;
export const Login = styled.input`
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
  border: 1px solid ${(props) => (props.focusBorder && "#9d65c9") || "#f1f1f1"};
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: auto;
  width: 90%;
  max-width: 95%;
`;
export const Password = styled.input`
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
  color: #d0d0d0;
  cursor: pointer;
`;
export const AuthOtherBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;
