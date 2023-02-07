import React from "react";
import { DatePicker } from "antd";

const DatePickerQuizfer = ({ label, required=true }) => {
  return (
    <div>
      <p className="font-bold mb-2 text-lg text-slate-500">{label} {required && <span className="text-red-600">*</span>}</p>
      <DatePicker placeholder={`Nhập ${label}`} />
    </div>
  );
};

export default DatePickerQuizfer;
