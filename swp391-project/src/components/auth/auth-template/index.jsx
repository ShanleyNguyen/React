import { Button, Checkbox, Divider } from "antd";
import React, { useMemo } from "react";
import InputQuizfer from "../../ui/input";
import DatePickerQuizfer from "../../ui/date-picker";

const AuthTemplate = ({ type }) => {
  const isSignUp = useMemo(() => type === "signup", [type]);
  return (
    <div className="m-10 text-base">
      <div
        style={{ borderColor: "#d9d9d9" }}
        className="flex justify-center items-center gap-4 border rounded-lg hover:bg-slate-200 cursor-pointer"
      >
        <img
          width={50}
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt=""
        />
        <span className="font-bold text-slate-500">{isSignUp ? "Đăng ký" : "Đăng nhập"} bằng Google</span>
      </div>
      <Divider className="py-7">
        <span className="text-slate-500">Hoặc Email</span>
      </Divider>
      <div className="flex flex-col gap-5">
        {isSignUp && <DatePickerQuizfer label="Ngày sinh của bạn" required />}
        {isSignUp && <InputQuizfer label="Tên người dùng" required />}
        <InputQuizfer label="Email" required />
        <InputQuizfer label="Mật khẩu" required />
        <Button hidden={isSignUp} type="link">
          Bạn đã quên mật khẩu?
        </Button>
        <p className=" text-sm italic">
          {isSignUp && <Checkbox className="mr-2" />}
           {isSignUp ? "Tôi chấp nhận" : "Khi đăng nhập, bạn chấp thuận"}{" "}
          <span className="text-blue-500">Điều khoản dịch vụ</span> và{" "}
          <span className="text-blue-500">
            Chính sách quyền riêng tư của Quizfer
          </span>.
        </p>
        <Button
          type="link"
          className="bg-blue-500 text-white shadow-md mt-5"
          size="large"
          block
        >
          {isSignUp ? "Đăng ký" : "Đăng nhập"}
        </Button>
      </div>
    </div>
  );
};

export default AuthTemplate;
