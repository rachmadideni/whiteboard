"use client"

import { ConfigProvider, ConfigProviderProps } from "antd";

const theme = {
  token: {
    colorPrimary: "#000000",
  },
};

const AntdProvider = (props: ConfigProviderProps) => {
  return <ConfigProvider theme={theme}>{props.children}</ConfigProvider>;
};

export default AntdProvider;
