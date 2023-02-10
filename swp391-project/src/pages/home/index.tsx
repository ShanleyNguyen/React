import React from "react";
import { listCard } from "mock";
import CardQuizfer from "components/ui/card";
const banner = require("images/banner.png");

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center relative">
        <img
          src={banner}
          alt=""
          className="w-full rounded-lg shadow-lg h-[400px]"
        />
        <div className="absolute bg-blue text-white hover:text-yellow bottom-[20%] right-[53%] w-[250px] cursor-pointer p-3 rounded-lg font-bold text-center">
          Join Now
        </div>
      </div>
      <div className="mt-5">
        <p className="text-gray-dark text-3xl font-bold mb-3">Recent</p>
        <div className="grid grid-cols-4 gap-5">
          {listCard.map((item) => (
            <CardQuizfer
              flashName={item.flashName}
              numberOfTerms={item.numberOfTerms}
              author={item.author}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-gray-dark text-3xl font-bold mb-3">Recommened</p>
        <div className="grid grid-cols-4 gap-5">
          {listCard.map((item) => (
            <CardQuizfer
              flashName={item.flashName}
              numberOfTerms={item.numberOfTerms}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
