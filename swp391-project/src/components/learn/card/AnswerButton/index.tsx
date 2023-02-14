import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { FC, useMemo } from "react";

interface IAnswerButtonProps {
  answerText: string,
  status?: string;
  disabled?: boolean;
}

const AnswerButton: FC<IAnswerButtonProps> = ({ answerText ,status, disabled }) => {

  const renderStatusIcon = useMemo(() => {
    switch (status) {
      case "success":
        return <CheckOutlined className="text-green-dark text-3xl" />;
      case "failed":
        return <CloseOutlined className="text-red-600 text-3xl" />;
      default:
        return <></>;
    }
  }, [status]);
  
  const styleAnswerButton = useMemo(() => {
    let initStyle = `flex justify-between items-center text-lg font-bold border-2 border-slate-500 px-10 py-5 rounded-3xl `;
    switch (status) {
      case "success":
        initStyle += "bg-green-200 text-green-dark pointer-events-none border-none";
        break;
      case "failed":
        initStyle += "bg-red-200 text-red-600 pointer-events-none border-none";
        break;
      default:
        initStyle += `hover:bg-slate-200 cursor-pointer ${
          disabled && "opacity-40 pointer-events-none"
        }`;
    }
    return initStyle;
  }, [status, disabled]);

  return (
    <div className={styleAnswerButton}>
      <div>
        <span className="mr-5">Stt.</span>
        <span>{answerText}</span>
      </div>
      <div>{renderStatusIcon}</div>
    </div>
  );
};
export default AnswerButton;
