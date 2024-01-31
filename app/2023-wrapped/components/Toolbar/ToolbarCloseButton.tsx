import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import clsx from "clsx";
import Link from "next/link";
import { AccountButton } from "@/components/wallet-kit/AccountButton";

export type ToolbarCloseButtonProps = Extendable & {
  onClose?: () => void;
};

export const ToolbarCloseButton = (props: ToolbarCloseButtonProps) => {
  return <AccountButton className={"w-[200px] !py-[14px] !px-6"} />;
};
