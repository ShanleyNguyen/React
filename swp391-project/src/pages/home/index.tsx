import React, { useState } from "react";
import { listCard } from "mock";
import CardQuizfer from "components/ui/card";
import ButtonQuizfer from "components/ui/button";
import {
  CheckCircleOutlined,
  RedoOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { Modal } from "antd";
import InputQuizfer from "components/ui/input";
import { useNavigate } from "react-router-dom";
import SocketQuizferWrapper from "config/socket-io";
import useSocket from "hooks/socketFunc";
import { Else, If, Then } from "react-if";
import { useAppSelector } from "reduxHook";
const banner = require("images/banner.png");
const ads1 = require("images/Advertize-1.png");
const ads2 = require("images/Advertize-2.png");

const HomePage = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const [isOpenEnterRoomCode, setIsOpenEnterRoomCode] =
    useState<boolean>(false);
  const [refSocket, setRefSocket] = useState<any>(null);
  const { sendMessageSocket } = useSocket(refSocket);
  const isAuthen = useAppSelector((state) => state.user.isAuthenticated);
  const goToGame = () => {
    sendMessageSocket({
      to: [roomCode],
      message: "newJoin",
      value: {
        userInfo: {
          id: "ducnh",
          name: "Ducnh",
          avatar:
            "https://scontent.xx.fbcdn.net/v/t39.30808-1/324021996_868954454378806_9081909468718192652_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=j7Fwf14adzgAX9TR_Ix&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBAE7jKeUnG1oNrTUYUgUTZxlKEla_EBysEL3rTj1DOiw&oe=63E8248F",
        },
      },
    });
    navigate("/game");
  };

  return (
    <>
      <SocketQuizferWrapper setRef={setRefSocket} />
      <div className="flex justify-center relative">
        <img
          src={banner}
          alt=""
          className="w-full rounded-lg shadow-lg h-[400px]"
        />
        <ButtonQuizfer
          className="absolute bottom-[20%] right-[53%] w-[250px]"
          color="blue"
          onClick={() => setIsOpenEnterRoomCode(true)}
        >
          Join Now
        </ButtonQuizfer>
      </div>

      <If condition={isAuthen}>
        <Then>
          <div className="mt-5">
            <p className="text-gray-dark text-3xl font-bold mb-3">Recent</p>
            <div className="grid grid-cols-4 gap-5">
              {listCard.map((item, index) => (
                <div key={index}>
                  <CardQuizfer
                    setName={item.set_name}
                    description={item.description}
                    tagName={item.tag_name}
                    numberOfTerms={item.flashcards.length}
                    author={item.author}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="text-gray-dark text-3xl font-bold mb-3">Recommened</p>
            <div className="grid grid-cols-4 gap-5">
              {listCard.map((item, index) => (
                <div key={index}>
                  <CardQuizfer
                    setName={item.set_name}
                    numberOfTerms={item.flashcards.length}
                    author={item.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </Then>
        <Else>
          <div className="flex justify-center grid-cols-2 sm:grid-cols-4 gap-10 place-items-center pt-10">
            <div className="flex w-[35%] min-h-fit ">
              <img src={ads1} alt="ads2" className="rounded-[20px]" />
            </div>
            <div className="block justify-end w-[40%] text-justify">
              <div>
                <h2 className="text-3xl font-bold tracking-wide pb-5">
                  Memorise anything with free digital flashcards
                </h2>
              </div>
              <div>
                <p className="antialiased font-light">
                  Research shows that testing yourself with flashcards is more
                  effective than rereading your notes. Find existing flashcards
                  created by peers and teachers, or create your own in a flash.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center grid-cols-2 sm:grid-cols-4 gap-10 place-items-center pt-10">
            <div className="block justify-end w-[40%] text-justify">
              <div>
                <h2 className="text-3xl font-bold tracking-wide pb-5">
                  From school to university, smash any subject
                </h2>
              </div>
              <div>
                <p className="antialiased font-light">
                  From maths to medicine to modern languages, QuizFer is used by
                  students in hundreds of different subjects at school,
                  university and beyond. Remember more, more efficiently — no
                  matter what youre studying.
                </p>
              </div>
            </div>
            <div className="flex w-[35%] min-h-fit">
              <img src={ads2} alt="ads2 " className="rounded-[20px]" />
            </div>
          </div>

          <section className="pt-10 services">
            <h1 className="heading space-x-4">
              <span>P</span>
              <span>R</span>
              <span>A</span>
              <span>C</span>
              <span>T</span>
              <span>I</span>
              <span>C</span>
              <span>E</span>
            </h1>
            <div className="box-container">
              <div className="box">
                <CheckCircleOutlined className="text-3xl" />
                <h3>Learn</h3>
                <p>
                  When we improve our education and continue to learn, we can
                  foster new connections, increase our marketable skills, and
                  understand people better.
                </p>
              </div>
              <div className="box">
                <RiseOutlined className="text-3xl" />
                <h3>Improve</h3>
                <p>
                  Education helps us get exposure to new ideas and concepts that
                  we can use to appreciate and improve the world around us and
                  the world within us.
                </p>
              </div>
              <div className="box">
                <RedoOutlined className="text-3xl" />
                <h3>Repeat</h3>
                <p>
                  Learning allows us to make sense of the world around us, the
                  world inside of us, and where we fit within the world.
                  Education is the tool that breaks down all barriers. All
                  things are possible because anything can be learned.
                </p>
              </div>
            </div>
          </section>
        </Else>
      </If>

      <Modal
        open={isOpenEnterRoomCode}
        onCancel={() => {
          setRoomCode("");
          setIsOpenEnterRoomCode(false);
        }}
      >
        <div className="py-5 text-center">
          <p className="text-3xl font-bold mb-5 text-gray-dark">Room code</p>
          <InputQuizfer
            value={roomCode}
            className="mb-4"
            placeholder="Enter room code"
            onChange={setRoomCode}
          />
          <ButtonQuizfer color="blue" onClick={goToGame} disabled={!roomCode}>
            Join Now
          </ButtonQuizfer>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
