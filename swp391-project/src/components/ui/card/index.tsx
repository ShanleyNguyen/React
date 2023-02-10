import React from "react";
import { Card } from "antd";
import { FC } from "react";
interface ICardQuizferProps {
  flashName: string;
  numberOfTerms: string | number;
  author: {
    name: string;
    avatar: string;
  };
}
const CardQuizfer: FC<ICardQuizferProps> = ({
  flashName,
  numberOfTerms,
  author,
}) => {
  return (
    <Card className="border-slate-300 border-2 cursor-pointer hover:border-purple hover:text-purple text-gray-dark min-h-[150px] px-5 py-3 h-full font-bold">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-lg">{flashName}</p>
          <p className="">{numberOfTerms} Terms</p>
        </div>
        <div className="flex gap-4">
          <img
            width={30}
            src={author?.avatar}
            alt=""
            className="rounded-full"
          />
          <span className="">{author?.name}</span>
        </div>
      </div>
    </Card>
  );
};

export default CardQuizfer;
