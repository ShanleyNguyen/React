interface ISendMessageProps {
  to: string[];
  message: string;
  value: any;
}

const useSocket = (ref: any) => {
  const sendMessageSocket = ({ to, message, value }: ISendMessageProps) => {
    const mapTopic = to.map((item) => `/topic/${item}`);
    ref.sendMessage(
      mapTopic,
      JSON.stringify({
        message,
        value,
      })
    );
  };
  return {
    sendMessageSocket,
  };
};

export default useSocket;
