import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, InitializeForm } from "../../../modules/auth";
import AuthForm from "../AuthForm";

const Register = () => {
  // const dispatch = useDispatch();
  // const { auth, authError, form } = useSelector(({ auth }) => ({
  //   form: auth.form,
  //   auth: auth.auth,
  //   authError: auth.authError,
  // }));

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const { nick_name, email, password } = form;
  //   console.log("onSubmit(register)");
  //   dispatch(register({ nick_name, email, password }));
  // };

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   dispatch(
  //     changeField({
  //       form: "register",
  //       key: name,
  //       value,
  //     })
  //   );
  // };

  // useEffect(() => {
  //   dispatch(InitializeForm("register"));
  // }, [dispatch]);

  // useEffect(() => {
  //   if (auth) console.log("auth", auth);
  //   if (authError) console.log("authError", authError);
  // }, [auth, authError]);

  return (
    <AuthForm
      type={"register"}
      // form={form}
      // onChange={onChange}
      // onSubmit={onSubmit}
    />
  );
};
export default Register;
