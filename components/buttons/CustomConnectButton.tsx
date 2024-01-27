"use client";

import { ConnectButton, useWallet } from "@suiet/wallet-kit";
import { Extendable } from "@/types/global";
import { useCallback, useEffect } from "react";
import { Routes } from "@/configs/routes";
import { useRouter } from "next/navigation";

export type ConnectButtonProps = Extendable & {};

export const CustomConnectButton = (props: ConnectButtonProps) => {
  const { name } = useWallet();
  const router = useRouter();

  const handleConnectSuccess = useCallback(
    (name: string) => {
      if (name) {
        router.push(Routes.WRAP23__REVIEW_TXN);
      }
    },
    [router],
  );

  useEffect(() => {
    if (!name) return;

    // TODO: check if wallet is Suiet?
    // console.log("connected wallet name", name);
    // if (name !== "Suiet") return;

    handleConnectSuccess(name);
  }, [name]);

  return <ConnectButton {...props} onConnectSuccess={handleConnectSuccess} />;
};
