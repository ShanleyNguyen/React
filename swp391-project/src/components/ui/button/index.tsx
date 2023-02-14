import React, { FC } from "react";
import { useMemo } from "react";
interface IButtonQuizferProps {
  className?: string | any;
  disabled?: boolean;
  children?: string | any;
  color?: string | any;
  onClick?: () => void;
}
const ButtonQuizfer: FC<IButtonQuizferProps> = ({
  children,
  className = "",
  color = "",
  disabled,
  onClick,
}) => {
  const styleBtn = useMemo(() => {
    let initStyleBtn = "";
    switch (color) {
      case "blue":
        initStyleBtn = "bg-blue text-white hover:text-yellow";
        break;
      case "yellow":
        initStyleBtn = "bg-yellow text-blue hover:text-opacity-80";
        break;
      default:
        initStyleBtn = "text-blue hover:bg-slate-200";
        break;
    }
    return `flex justify-around items-center items px-5 py-3 rounded-lg font-bold text-base text-center ${disabled && "pointer-events-none bg-slate-200"} ${className} ${initStyleBtn}`;
  }, [className, color, disabled]);

  return (
    <div role="button" className={styleBtn} onClick={onClick}>
      <p className="leading-none">{children}</p>
    </div>
  );
};

export default ButtonQuizfer;
