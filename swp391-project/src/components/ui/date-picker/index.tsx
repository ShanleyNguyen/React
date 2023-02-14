import { FC } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
interface IDatePickerQuizferProps {
  label: string;
  required?: boolean;
  error?: string | boolean; 
  onChange?: (date: string) => void;
}
const DatePickerQuizfer: FC<IDatePickerQuizferProps> = ({
  label,
  required = true,
  error,
  onChange,
}) => {
  return (
    <div>
      <p className="font-bold mb-2 text-lg text-slate-500">
        {label} {required && <span className="text-red-600">*</span>}
      </p>
      <DatePicker
        className="text-xl"
        placeholder={`Enter ${label}`}
        onChange={(e) => onChange && onChange(dayjs(e).format("YYYY-MM-DD"))}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default DatePickerQuizfer;
