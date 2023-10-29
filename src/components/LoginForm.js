import React, { useState } from "react";
import {
  AgreeCheckbox,
  ContainerDiv,
  Heading,
  ImgDiv,
  InputText,
  LoginComponent,
  LoginDiv,
  LoginDivUpper,
  LoginId,
  LoginIdInput,
  Password,
  PasswordInput,
  Checkbox,
  RememberMeLable,
  ShowHideIcon,
  StyledAnchor,
  TermsConditions,
  ChangePassword,
  LoginButton,
} from "./StyledComponent";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerDiv>
      <ImgDiv></ImgDiv>
      <LoginComponent>
        <LoginDiv>
          <LoginDivUpper>
            <Heading>Login</Heading>
            <LoginId>Login ID</LoginId> <br />
            <LoginIdInput placeholder="Enter Login ID"></LoginIdInput>
            <br />
            <br />
            <Password>Password</Password>
            <br />
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
            <ShowHideIcon onClick={togglePasswordVisibility}>
              {showPassword ? "🙈" : "👁️"}
            </ShowHideIcon>
            <RememberMeLable>
              {" "}
              <Checkbox type="checkbox" /> Remember Me

              <ChangePassword>Change Password</ChangePassword>
            </RememberMeLable>
            <AgreeCheckbox>
              <Checkbox type="checkbox" />
              Agree to{" "}
              <TermsConditions href=""> Terms & Conditions</TermsConditions>
            </AgreeCheckbox>

            <LoginButton>Login</LoginButton>
          </LoginDivUpper>


          <InputText>
            Don't have an account?{" "}
            <StyledAnchor href="">Register Here</StyledAnchor>
          </InputText>
        </LoginDiv>
      </LoginComponent>
    </ContainerDiv>
  );
}

export default LoginForm;
