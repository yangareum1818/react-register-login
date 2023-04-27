import React from "react";
import styled from "styled-components";

const AuthContainer = styled.div`
  padding: 20px 40px 40px;
  min-width: 450px;
  border-radius: 15px;
  box-shadow: 0 2px 2px 4px #f1f1f1;
`;

function AuthLayout({ children }) {
  return <AuthContainer>{children}</AuthContainer>;
}
export default AuthLayout;
