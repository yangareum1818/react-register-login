import React from "react";
import styled from "styled-components";

const AuthWrapping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  min-width: 280px;
  border-radius: 15px;
  box-shadow: 0 2px 2px 4px #f1f1f1;
`;

const AuthCommonPage = ({ children }) => {
  return <AuthWrapping>{children}</AuthWrapping>;
};
export default AuthCommonPage;
