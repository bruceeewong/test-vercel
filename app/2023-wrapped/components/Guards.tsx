"use client";

import { Extendable } from "@/types/global";
import { useWalletGuard } from "@/hooks/useWalletGuard";
import { useRouter } from "next/navigation";
import { Routes } from "@/configs/routes";

export type GuardsProps = Extendable & {};

export const Guards = (props: GuardsProps) => {
  const router = useRouter();
  useWalletGuard({
    onConnected: () => {
      console.log("onGuarded");
    },
    onDisconnected: () => {
      console.log("onNotGuarded");
      router.replace(Routes.WRAP23__WELCOME);
    },
  });

  return props.children;
};
