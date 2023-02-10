import React from "react";
import { Input } from "antd";
import { FC } from "react";
interface IInputQuizferProps {
  label: string;
  required?: boolean;
}
const InputQuizfer: FC<IInputQuizferProps> = ({
  label,
  required = true,
}) => {
  return (
    <div>
      <p className="font-bold mb-2 text-lg text-slate-500">
        {label} {required && <span className="text-red-600">*</span>}
      </p>
      <Input size="large" placeholder={`Nhập ${label}`} />
    </div>
  );
};

export default InputQuizfer;
