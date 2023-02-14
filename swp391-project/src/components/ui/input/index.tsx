import { Input } from "antd";
import { FC } from "react";
interface IInputQuizferProps {
  className?: string;
  label?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  error?: string | boolean;
  onChange?: (value: string) => void;
}
const InputQuizfer: FC<IInputQuizferProps> = ({
  label,
  value,
  required = false,
  type = "text",
  placeholder,
  className,
  error,
  onChange,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-2 text-lg text-slate-500">
        {label} {required && <span className="text-red-600">*</span>}
      </p>
      <Input
        value={value}
        type={type}
        size="large"
        placeholder={placeholder || `Enter ${label}`}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default InputQuizfer;
