"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { Extendable } from "@/types/global";

export const Theme = (props: Extendable) => {
  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};
