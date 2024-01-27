import { useWallet } from "@suiet/wallet-kit";
import { useEffect } from "react";

export function useWalletGuard(props: {
  onConnected?: (name: string) => void;
  onDisconnected?: () => void;
}) {
  const { name, status } = useWallet();

  useEffect(() => {
    console.log("useWalletGuard", status, name);
    if (status === "connected") {
      if (!name) throw new Error("Wallet name is not defined");

      props?.onConnected?.(name);
    } else {
      props?.onDisconnected?.();
    }
  }, [status]);
}
