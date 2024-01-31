"use client";

import { Button } from "@/components/Button";
import { addressEllipsis, useWallet } from "@suiet/wallet-kit";
import { Icon } from "@/components/Icon";
import clsx from "clsx";
import { Extendable } from "@/types/global";
import { useCallback, useState } from "react";
import { debounce } from "next/dist/server/utils";

export type AccountButtonProps = Extendable & {};

export const AccountButton = (props: AccountButtonProps) => {
  const { account, disconnect } = useWallet();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, [setIsHovering]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, [setIsHovering]);

  const handleClick = useCallback(
    debounce(() => {
      if (isHovering) {
        disconnect();
      }
    }, 100),
    [isHovering, disconnect],
  );

  const renderDisconnectContent = () => {
    return (
      <>
        <Icon name={"disconnect"} size={16} />
        <span className={"text-red-500 font-semibold"}>Disconnect</span>
      </>
    );
  };

  if (!account) {
    return null;
  }
  return (
    <Button
      hasShadow={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={clsx(
        "flex justify-center items-center gap-2 !bg-accent border-2 border-white py-2 transition-colors ",
        { "hover:!bg-error-50": isHovering },
        props.className,
      )}
    >
      {isHovering ? (
        renderDisconnectContent()
      ) : (
        <>
          <Icon name={"wallet"} size={16} />
          <span className={"text-white font-semibold"}>
            {addressEllipsis(account.address)}
          </span>
        </>
      )}
    </Button>
  );
};
