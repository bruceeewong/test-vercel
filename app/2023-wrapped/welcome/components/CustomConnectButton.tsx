"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { ConnectButton } from "@suiet/wallet-kit";
import clsx from "clsx";
import { Extendable } from "@/types/global";
// import {Connect} from "@wallet-standard/features";

export type ConnectButtonProps = Extendable & {};

export const CustomConnectButton = (props: ConnectButtonProps) => {
  return <ConnectButton {...props} />;
  // return (
  // <Button className={"px-4 mt-12"}>
  //   <Link
  //     href={"/2023-wrapped/review-txn"}
  //     className={
  //       "gradient-blue flex justify-center items-center text-md gap-1 font-semibold"
  //     }
  //   >
  //     Connect Suiet
  //     <Icon name={"arrow-left-gradient-blue"} size={16} />
  //   </Link>
  // </Button>
  // );
};
