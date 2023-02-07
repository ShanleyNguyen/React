import React, { useState } from "react";
import logo from "../../images/logo.png";
import loginBanner from "../../images/loginBanner.jpg";
import Search from "antd/es/transfer/search";
import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import AuthTemplate from "../auth/auth-template";

const Header = (props) => {
  const [openAuth, setOpenAuth] = useState(false);
  const [typeAuth, setTypeAuth] = useState("signin");

  return (
    <>
      <div className="min-w-full min-h-[50px] p-3 sticky top-0">
        <div className="flex items-center justify-between">
          <img src={logo} width={150} alt="" />
          <div className="flex gap-1">
            {/* <Search
              allowClear
              placeholder="Học phần, sách giáo khoa, câu hỏi ..."
              className="w-[200px]"
            /> */}
            <Button
              size="large"
              type="link"
              onClick={() => {
                setTypeAuth("signin");
                setOpenAuth(true);
              }}
            >
              Đăng nhập
            </Button>
            <Button
              size="large"
              className="bg-yellow-300"
              onClick={() => {
                setTypeAuth("signup");
                setOpenAuth(true);
              }}
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        className="p-0"
        closable={false}
        placement={"top"}
        height="100%"
        open={openAuth}
      >
        <div className="flex h-full">
          <img className="w-1/2  h-full" src={loginBanner} width={400} alt="" />
          <div className="w-1/2 px-[100px] py-10 overflow-scroll">
          <img className="mx-auto mb-5" src={logo} width={200} alt="" />
            <div className="flex justify-center gap-5">
              <Button
                size="large"
                className={typeAuth === "signin" && "bg-yellow-300"}
                type="link"
                onClick={() => setTypeAuth("signin")}
              >
                Đăng nhập
              </Button>
              <Button
                size="large"
                type="link"
                className={typeAuth === "signup" && "bg-yellow-300"}
                onClick={() => setTypeAuth("signup")}
              >
                Đăng ký
              </Button>
            </div>
            <AuthTemplate type={typeAuth} />
          </div>
        </div>
        <CloseOutlined className="absolute top-3 right-5" onClick={() => setOpenAuth(false)} />
      </Drawer>
    </>
  );
};

export default Header;
