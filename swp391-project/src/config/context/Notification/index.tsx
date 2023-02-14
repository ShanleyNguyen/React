import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";
import React, { createContext, useState, useEffect } from "react";

interface NotificationProps {
  notification: (status: NoticeType, message: string) => void;
}

export const NotificationContext = createContext<NotificationProps>({
  notification: (status: NoticeType, message: string) => {},
});

interface NotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [api, contextHolder] = message.useMessage();

  const notification = (status: NoticeType, message: string) => {
    api.open({
      type: status,
      content: message,
    });
  };
  return (
    <NotificationContext.Provider value={{ notification }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
