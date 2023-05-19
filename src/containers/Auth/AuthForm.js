import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SuccessBtn } from "../../components/Button";
import AuthLayout from "../../Layout/AuthLayout";
import { Title } from "../common/Title";
import {
  Form,
  Label,
  LabelText,
  InputStyle,
  ErrMsg,
  LinkWrapping,
} from "./style";
import useInput from "../../hooks/useInput";
import axios from "axios";

const textMap = {
  register: "회원가입",
  login: "로그인",
};

const AuthForm = ({ type }) => {
  const navigator = useNavigate();
  const [nickname, onChangeNickname] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let passwordRegex = new RegExp(
    "/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{12,25}$/"
  );

  const onChangePassWord = useCallback(
    (e) => {
      setPassword(e.target.value);
      setPasswordError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onChangePassWordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const text = textMap[type];
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const option = {
        data: {
          email: email,
          nick_name: nickname,
          password: password,
        },
        headers: {
          Accept: "application/json",
          "Conten-Type": "application/json",
        },
      };

      const userDataSave = localStorage.setItem(
        "user",
        JSON.stringify(option.data)
      );
      const userData = localStorage.getItem("user");

      if (!passwordError && nickname) {
        console.log("email로 회원가입 - !");
        axios
          .post(`http://59.12.200.154/auth/registration`, JSON.parse(userData))
          .then((response) => {
            console.log(response);
            if (response.status === 200)
              localStorage.getItem("user") + navigator("/login");
            if (response.status === 400)
              alert("이메일 또는 비밀번호가 일치하지않습니다.");
            if (response.status === 500) alert("Sever Error");
          })
          // .then((data) =>
          //   data.status === 200
          //     ? localStorage.setItem("Cookie", data.data) + navigator("/login")
          //     : data.status === 400
          //     ? alert("이메일 또는 비밀번호가 일치 하지 않습니다.")
          //     : data.status === 500
          //     ? alert("Sever Error")
          //     : ""
          // )
          .catch((error) => console.log("catch", error))
          .finally(() => {});
      }
    },
    [nickname, email, password, passwordCheck, passwordError]
  );

  return (
    <AuthLayout>
      <Form>
        <Title>{text}</Title>
        {type === "register" ? (
          <>
            <Label>
              <LabelText>닉네임</LabelText>
              <InputStyle
                type="text"
                name="nickname"
                placeholder="8자 이하 원하는 닉네임을 입력해주세요."
                maxLength={8}
                required
                value={nickname}
                onChange={onChangeNickname}
              />
              {!nickname && <ErrMsg>닉네임을 입력해주세요.</ErrMsg>}
            </Label>
            <Label>
              <LabelText>이메일</LabelText>
              <InputStyle
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요."
                required
                onChange={onChangeEmail}
                value={email}
              />
              {!emailRegex.test(email) && (
                <ErrMsg>올바른 이메일형식으로 작성해주세요.</ErrMsg>
              )}
            </Label>
            <Label>
              <LabelText>비밀번호</LabelText>
              <InputStyle
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                minLength={12}
                required
                value={password}
                onChange={onChangePassWord}
              />
              {!passwordRegex.test(password) && passwordError && (
                <ErrMsg>
                  영문, 숫자, 특수문자 조합 12자 이상입력해주세요.
                </ErrMsg>
              )}
            </Label>
            <Label>
              <LabelText>비밀번호 확인</LabelText>
              <InputStyle
                type="password"
                name="passwordcheck"
                placeholder="비밀번호를 입력해주세요."
                required
                value={passwordCheck}
                onChange={onChangePassWordCheck}
              />
              {passwordError && (
                <ErrMsg>
                  비밀번호가 일치하지 않습니다. 올바르게 입력해주세요.
                </ErrMsg>
              )}
            </Label>
            <SuccessBtn onClick={onSubmit}>{text}</SuccessBtn>
          </>
        ) : (
          <>
            <Label>
              <LabelText>이메일</LabelText>
              <InputStyle
                type={"email"}
                name="email"
                placeholder="이메일을 입력해주세요."
                required
              />
              {/* {emailMsg && <ErrMsg>올바른 이메일형식으로 작성해주세요.</ErrMsg>} */}
            </Label>
            <Label>
              <LabelText>비밀번호</LabelText>
              <InputStyle
                type={"password"}
                name="password"
                placeholder="비밀번호를 입력해주세요."
                minLength={"12"}
                required
              />
              {/* <ErrMsg>영문, 숫자, 특수문자 조합 12자 이상입력해주세요.</ErrMsg> */}
            </Label>
            <SuccessBtn>{text}</SuccessBtn>
          </>
        )}
      </Form>
      <LinkWrapping>
        <Link className="more_btn" to={"/"}>
          처음으로
        </Link>
      </LinkWrapping>
    </AuthLayout>
  );
};

export default AuthForm;
