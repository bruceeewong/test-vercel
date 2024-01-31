"use client";

import { ConnectButton, useWallet } from "@suiet/wallet-kit";
import { Extendable } from "@/types/global";
import { useCallback, useEffect } from "react";
import { Routes } from "@/configs/routes";
import { useRouter } from "next/navigation";
import { Button, message } from "antd";

export type ConnectButtonProps = Extendable & {};

export const CustomConnectButton = (props: ConnectButtonProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { name, disconnect } = useWallet();
  const router = useRouter();

  const handleConnectSuccess = useCallback(
    (name: string | undefined) => {
      if (!name) return;
      if (name !== "Suiet") {
        messageApi.info("Please use Suiet wallet to connect.");
        disconnect();
        return;
      }
      router.push(Routes.WRAP23__REVIEW_TXN);
    },
    [router],
  );

  useEffect(() => {
    handleConnectSuccess(name);
  }, [name]);

  return (
    <div>
      {contextHolder}
      <ConnectButton {...props} onConnectSuccess={handleConnectSuccess} />
    </div>
  );
};
