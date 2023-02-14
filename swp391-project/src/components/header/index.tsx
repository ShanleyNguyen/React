import React, { useContext, useEffect, useState } from "react";
import { Avatar, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import AuthTemplate from "components/auth/auth-template";
import ButtonQuizfer from "components/ui/button";
import { useNavigate } from "react-router-dom";
import { Else, If, Then } from "react-if";
import { AuthContext } from "config/context/auth";
import { FormikContext } from "formik";
import { useAuthFormik } from "components/auth/auth-template/hooks";
import { useAppSelector } from "reduxHook";

const logo = require("images/logo.png");
const loginBanner = require("images/loginBanner.png");

const Header: React.FC<any> = () => {
  const navigate = useNavigate();
  const { formik, handleSubmit } = useAuthFormik();
  const [openAuth, setOpenAuth] = useState(false);
  const [typeAuth, setTypeAuth] = useState("signin");
  const { isAuthenticated } = useContext(AuthContext);
  const userInfo = useAppSelector((state) => state.user.userInfo);

  useEffect(() => {
    const flag = typeAuth === "signin";
    formik.setFieldValue("typeSubmit", typeAuth);
    formik.setFieldValue("first_name", flag ? "none" : "");
    formik.setFieldValue("last_name", flag ? "none" : "");
    formik.setFieldValue("email", flag ? "none@none" : "");
    formik.setFieldValue("date_of_birth", flag ? "none" : "");
  }, [typeAuth]);

  const renderAuthTemplate = (
    <Drawer
      className="p-0"
      closable={false}
      placement={"top"}
      height="100%"
      open={openAuth}
    >
      <div className="flex h-full">
        <img className="w-1/2" src={loginBanner} alt="" />
        <div className="w-1/2 px-[5%] py-10 overflow-y-scroll">
          <img className="mx-auto mb-5" src={logo} width={200} alt="" />
          <div className="flex justify-center gap-5">
            <ButtonQuizfer
              color={typeAuth === "signin" && "yellow"}
              onClick={() => setTypeAuth("signin")}
            >
              Signin
            </ButtonQuizfer>
            <ButtonQuizfer
              color={typeAuth === "signup" && "yellow"}
              onClick={() => setTypeAuth("signup")}
            >
              Register
            </ButtonQuizfer>
          </div>
          <AuthTemplate type={typeAuth} handleSubmit={handleSubmit} />
        </div>
      </div>
      <CloseOutlined
        className="absolute top-3 right-5"
        onClick={() => setOpenAuth(false)}
      />
    </Drawer>
  );

  return (
    <FormikContext.Provider value={formik}>
      <div className="bg-white min-w-full min-h-[50px] p-3 fixed top-0 shadow-md z-50">
        <div className="flex items-center justify-between">
          <img
            role="button"
            src={logo}
            width={150}
            alt=""
            onClick={() => navigate("/")}
          />
          <If condition={!isAuthenticated}>
            <Then>
              <div className="flex gap-1">
                <ButtonQuizfer
                  onClick={() => {
                    setTypeAuth("signin");
                    setOpenAuth(true);
                  }}
                >
                  Sign in
                </ButtonQuizfer>
                <ButtonQuizfer
                  className="py-2"
                  color="yellow"
                  onClick={() => {
                    setTypeAuth("signup");
                    setOpenAuth(true);
                  }}
                >
                  Register
                </ButtonQuizfer>
              </div>
            </Then>
            <Else>
              <div className="flex gap-3 items-center">
                <span className="mr-2 font-bold">
                  Hi, {userInfo?.full_name || ""}
                </span>
                <Avatar
                  className="w-10 h-10 "
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
                <ButtonQuizfer
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Logout
                </ButtonQuizfer>
              </div>
            </Else>
          </If>
        </div>
      </div>
      {renderAuthTemplate}
    </FormikContext.Provider>
  );
};

export default Header;
