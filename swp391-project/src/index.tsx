import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import reportWebVitals from "reportWebVitals";
import "./index.scss";
import "./antd.scss";
import Routing from "router/index";
import AuthContextProvider from "config/context/auth";
import { ConfigProvider, FloatButton } from "antd";
import NotificationProvider from "config/context/Notification";
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          "Liberation Mono", "Courier New", monospace`,
        },
      }}
    >
      <NotificationProvider>
        <Provider store={store}>
          <AuthContextProvider>
            <Routing />
            <FloatButton.BackTop />
          </AuthContextProvider>
        </Provider>
      </NotificationProvider>
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
