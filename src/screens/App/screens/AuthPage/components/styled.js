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
export const AuthOtherBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;
