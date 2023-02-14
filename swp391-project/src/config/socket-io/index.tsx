import { FC, memo } from "react";
import SockJsClient from "react-stomp";
interface ISocketQuizferWrapperProps {
  topics?: string[];
  setRef: (ref: any) => void;
  onMessage?: (message: any) => void;
}

const SocketQuizferWrapper: FC<ISocketQuizferWrapperProps> = ({
  topics = [],
  setRef,
  onMessage,
}) => {
  return (
    <SockJsClient
      url={process.env.REACT_APP_SOCKET_URL}
      topics={topics.map((item) => `/topic/${item}`)}
      onMessage={(message: any) => onMessage && onMessage(message)}
      ref={setRef}
    />
  );
};

export default memo(SocketQuizferWrapper);
