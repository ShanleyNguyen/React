import { Button, Checkbox, Divider } from "antd";
import React, { useMemo, useState } from "react";
import InputQuizfer from "components/ui/input";
import DatePickerQuizfer from "components/ui/date-picker";
import ButtonQuizfer from "components/ui/button";
import { If, Then } from "react-if";
import { IValuesTypes } from "./hooks";
import { useFormikContext } from "formik";
interface IAuthTemplateProps {
  type: string;
  handleSubmit: () => void;
}
const AuthTemplate: React.FC<IAuthTemplateProps> = ({ type, handleSubmit }) => {
  const isSignUp = useMemo(() => type === "signup", [type]);
  const [isTouched, setIsTouched] = useState(false);
  const [isAcceptPolicy, setIsAcceptPolicy] = useState(true);

  const { values, errors, setFieldValue } = useFormikContext<IValuesTypes>();
  const onLogin = () => {
    setIsTouched(true);    
    handleSubmit();
  };

  return (
    <div className="m-10 text-base">
      <div
        style={{ borderColor: "#d9d9d9" }}
        className="flex justify-center items-center gap-4 shadow-md rounded-lg hover:bg-slate-200 cursor-pointer"
      >
        <img
          width={50}
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt=""
        />
        <span className="font-bold text-slate-500">
          {isSignUp ? "Register" : "Continue"} with Google
        </span>
      </div>
      <Divider className="py-7">
        <span className="text-slate-500">or</span>
      </Divider>
      <div className="flex flex-col gap-5">
        <If condition={isSignUp}>
          <Then>
            <InputQuizfer
              value={values.first_name}
              label="First Name"
              required
              error={isTouched && errors.first_name}
              onChange={(value) => setFieldValue("first_name", value)}
            />
            <InputQuizfer
              value={values.last_name}
              label="Last Name"
              required
              error={isTouched && errors.last_name}
              onChange={(value) => setFieldValue("last_name", value)}
            />
            <DatePickerQuizfer
              label="Birthday"
              required
              error={isTouched && errors.date_of_birth}
              onChange={(value) => setFieldValue("date_of_birth", value)}
            />
            <div className="flex gap-10 items-center">
              <p className="font-bold mb-2 text-lg text-slate-500">UserType</p>
              <div className="flex gap-3">
                {["Teacher", "Student"].map((item, index) => (
                  <div
                    key={index}
                    role="button"
                    className={`px-5 py-2 border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-200 hover:text-slate-500 ${
                      item === values.user_type &&
                      "bg-blue text-white pointer-events-none"
                    }`}
                    onClick={() => setFieldValue("user_type", item)}
                  >
                    <span className="font-bold mb-2 ">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <If condition={values.user_type === "Teacher"}>
              <Then>
                <InputQuizfer
                  value={values.school_name}
                  label="School Name"
                  onChange={(value) => setFieldValue("school_name", value)}
                />
              </Then>
            </If>
            <InputQuizfer
              value={values.email}
              label="Email"
              required
              error={isTouched && errors.email}
              onChange={(value) => setFieldValue("email", value)}
            />
          </Then>
        </If>
        <InputQuizfer
          value={values.user_name}
          label="Username"
          required
          error={isTouched && errors.user_name}
          onChange={(value) => setFieldValue("user_name", value)}
        />
        <InputQuizfer
          value={values.password}
          label="Password"
          type="password"
          required
          error={isTouched && errors.password}
          onChange={(value) => setFieldValue("password", value)}
        />
        <Button hidden={isSignUp} type="link">
          Have you forgotten your password?
        </Button>
        <p className=" text-sm italic">
          {isSignUp && (
            <Checkbox
              className="mr-2"
              onChange={(e) => setIsAcceptPolicy(e.target.checked)}
            />
          )}
          {isSignUp ? "I accept" : "When login, you consent"}{" "}
          <span className="text-blue">Terms of Service</span> and{" "}
          <span className="text-blue">Quizfer's Privacy Policy</span>.
        </p>
        <ButtonQuizfer
          className="w-full"
          color="blue"
          disabled={isSignUp && !isAcceptPolicy}
          onClick={onLogin}
        >
          {isSignUp ? "Register" : "Signin"}
        </ButtonQuizfer>
      </div>
    </div>
  );
};

export default AuthTemplate;
