"use client";

import { useWallet, SuietWallet } from "@suiet/wallet-kit";
import { Extendable } from "@/types/global";
import { useCallback, useEffect, useState } from "react";
import { Routes } from "@/configs/routes";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { debounce } from "next/dist/server/utils";
import clsx from "clsx";
import { InstallationGuideModal } from "@/components/wallet-kit/InstallationGuideModal";

export type ConnectButtonProps = Extendable & {};

const SUIET_WALLET_NAME = "Suiet";

export const CustomConnectButton = (props: ConnectButtonProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { name, select, disconnect, allAvailableWallets } = useWallet();
  const [showGuidance, setShowGuidance] = useState(false);
  const router = useRouter();

  const handleConnectSuccess = useCallback(
    debounce((name: string | undefined) => {
      if (!name) return;
      if (name !== SUIET_WALLET_NAME) {
        messageApi.info("Please use Suiet wallet to connect.");
        disconnect();
        return;
      }
      router.push(Routes.WRAP23__REVIEW_TXN);
    }, 100),
    [router],
  );

  const handleConnect = useCallback(
    debounce(async () => {
      console.log("allAvailableWallets", allAvailableWallets);
      const suietWallet = allAvailableWallets.find(
        (walletAdapter) => walletAdapter.name === SUIET_WALLET_NAME,
      );
      if (!suietWallet) {
        setShowGuidance(true);
        return;
      }
      try {
        await select(suietWallet.name);
      } catch (e) {
        messageApi.error("Failed to connect to Suiet wallet.");
        console.error(e);
      }
    }, 100),
    [allAvailableWallets, select],
  );

  useEffect(() => {
    handleConnectSuccess(name);
  }, [name]);

  return (
    <>
      {contextHolder}
      <Button
        className={clsx(
          "flex justify-center items-center gap-1",
          props.className,
        )}
        onClick={handleConnect}
      >
        <span className={"gradient-blue text-md font-semibold"}>
          Connect Suiet
        </span>
        <Icon name={"arrow-right-gradient-blue"} size={16} />
      </Button>

      <InstallationGuideModal
        wallet={SuietWallet}
        open={showGuidance}
        onOpenChange={setShowGuidance}
      />
    </>
  );
};
