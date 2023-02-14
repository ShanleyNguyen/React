import { FC } from "react";
import AnswerButton from "./AnswerButton";
import { Card } from "antd";
interface ILearnCardProps {
  termText: string | any;
  answers?: any[];
}
const LearnCard: FC<ILearnCardProps> = ({ termText, answers }) => {
  return (
    <>
      <Card className=" text-slate-600 rounded-2xl px-40 py-10 shadow-lg font-bold">
        <div className="min-h-[600px] flex flex-col justify-between">
          {/* <span className="text-sm text-zinc-400">2/40</span> */}
          <p className="text-2xl text-left">{termText}</p>
          <div className="grid grid-cols-2 gap-5">
            <AnswerButton answerText="Any text here" status="" disabled />
            <AnswerButton
              answerText="Any text here"
              status="success"
              disabled
            />
            <AnswerButton answerText="Any text here" status="failed" disabled />
            <AnswerButton
              answerText="Any text here"
              status=""
              disabled={false}
            />
          </div>
        </div>
      </Card>
    </>
  );
};
export default LearnCard;
