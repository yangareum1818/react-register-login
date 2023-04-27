import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../../Layout/AuthLayout";

const Title = styled.h2`
  color: #555;
  text-align: center;
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const LabelText = styled.span`
  display: block;
  color: #555;
  font-size: 16px;
  font-weight: 500;
`;

const InputStyle = styled.input`
  padding: 4px 8px;
  margin-top: 4px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #555;
  border: 1px solid #555;
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    color: #555;
  }
`;

const ErrMsg = styled.span`
  display: none;
  position: absolute;
  bottom: -20px;
  left: 8px;
  color: #f00;
  font-size: 12px;
`;

const SuccessBtn = styled.button`
  margin: 10px 0px;
  width: 100%;
  height: 42px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background: #17ce5f;
  border: 1px solid #17ce5f;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #14bc55;
  }
`;

const LinkWrapping = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  & > * {
    color: #000;
    font-size: 14px;
    text-decoration: none;
  }
`;

const EmailInput = () => {
  return (
    <Label>
      <LabelText>이메일</LabelText>
      <InputStyle type={"email"} placeholder="이메일을 입력해주세요." />
      <ErrMsg>올바른 이메일 형식으로 입력해주세요.</ErrMsg>
    </Label>
  );
};

const PWInput = () => {
  return (
    <Label>
      <LabelText>비밀번호</LabelText>
      <InputStyle
        type={"password"}
        placeholder="비밀번호를 입력해주세요."
        minLength={"12"}
      />
      <ErrMsg>영문, 숫자, 특수문자 조합 12자 이상입력해주세요.</ErrMsg>
    </Label>
  );
};

const Login = () => {
  return (
    <AuthLayout>
      <Title>로그인</Title>
      <EmailInput />
      <PWInput />
      <SuccessBtn>로그인</SuccessBtn>
      <LinkWrapping>
        <Link className="more_btn" to={"/Register"}>
          회원가입
        </Link>
        <Link className="more_btn" to={"/"}>
          처음으로
        </Link>
      </LinkWrapping>
    </AuthLayout>
  );
};
export default Login;
