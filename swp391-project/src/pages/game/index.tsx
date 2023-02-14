// import { Input } from "antd";
import SocketQuizferWrapper from "config/socket-io";
import useSocket from "hooks/socketFunc";
import { useCallback, useState } from "react";

function GamePage() {
  const [refSocket, setRefSocket] = useState<any>(null);
  const [messageArr, setMessageArr] = useState<string[]>([]);
  const [listUser, setListUser] = useState<any[]>([]);
  // const [inputMessage, setInputMessage] = useState<string>("");

  const targetSocket = ["group", "ducnh"];
  const { sendMessageSocket } = useSocket(refSocket);
  const sendOldUser = (to: string) => {
    setTimeout(() => {
      sendMessageSocket({
        to: [to],
        message: "oldUser",
        value: {
          userInfo: {
            id: "ducnh",
            name: "Ducnh",
            avatar:
              "https://scontent.xx.fbcdn.net/v/t39.30808-1/324021996_868954454378806_9081909468718192652_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=j7Fwf14adzgAX9TR_Ix&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBAE7jKeUnG1oNrTUYUgUTZxlKEla_EBysEL3rTj1DOiw&oe=63E8248F",
          },
        },
      });
    }, 1000);
  };

  const handleMessage = useCallback(({ message, value }: any) => {
    switch (message) {
      case "message":
        setMessageArr([...messageArr, value]);
        break;
      case "newJoin":
        setListUser([...listUser, value.userInfo]);
        sendOldUser(value.userInfo.id);
        break;
      case "oldUser":
        setListUser([...listUser, value.userInfo]);
        break;
    }
  }, []);

  return (
    <div>
      <SocketQuizferWrapper
        setRef={setRefSocket}
        topics={targetSocket}
        onMessage={handleMessage}
      />
      <div className="grid grid-cols-6 gap-3">
        {listUser.map((item) => (
          <div className="flex justify-center bg-slate-300 rounded-lg p-5 shadow-md">
            <img width={50} src={item.avatar} alt="" className="rounded-full" />
          </div>
        ))}
      </div>
      {messageArr.map((item) => (
        <div>{item}</div>
      ))}
      {/* <Input
        value={inputMessage}
        showCount
        maxLength={20}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            refSocket.sendMessage(
              ["/topic/group"],
              JSON.stringify({ message: "message", value: inputMessage })
            );
            setInputMessage("");
          }
        }}
      /> */}
    </div>
  );
}

export default GamePage;
