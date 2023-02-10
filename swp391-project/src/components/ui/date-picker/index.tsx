import React, { FC } from "react";
import { DatePicker } from "antd";
interface IDatePickerQuizferProps {
  label: string;
  required?: boolean;
}
const DatePickerQuizfer: FC<IDatePickerQuizferProps> = ({
  label,
  required = true,
}) => {
  return (
    <div>
      <p className="font-bold mb-2 text-lg text-slate-500">
        {label} {required && <span className="text-red-600">*</span>}
      </p>
      <DatePicker placeholder={`Nhập ${label}`} />
    </div>
  );
};

export default DatePickerQuizfer;
