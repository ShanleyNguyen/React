import React from "react";
import { Card, Rate } from "antd";
import { FC } from "react";
interface ICardQuizferProps {
  setName: string;
  description?: string;
  numberOfTerms?: string | number;
  tagName?: string[];
  author: {
    name: string;
    avatar: string;
  };
}
const CardQuizfer: FC<ICardQuizferProps> = ({
  setName,
  numberOfTerms,
  description,
  tagName = [],
  author,
}) => {
  return (
    <Card className="cursor-pointer text-gray-dark min-h-[150px] px-5 py-3 h-full font-bold shadow-md hover:border-purple hover:text-purple">
      <div className="flex flex-col justify-between h-full mb-3">
        <div>
          <p className="text-lg">{setName}</p>
          <p>{description}</p>
          <p className="">{numberOfTerms || 0} Terms</p>
          <div className="flex gap-2">
            {tagName.map((item, index) => (
              <span key={index} role="link" className="text-blue hover:underline">
                #{item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              width={30}
              src={author?.avatar}
              alt=""
              className="rounded-full"
            />
            <span className="">{author?.name}</span>
          </div>
          <Rate className="text-base text-right" disabled allowHalf defaultValue={2.5} />
        </div>
      </div>
    </Card>
  );
};

export default CardQuizfer;
