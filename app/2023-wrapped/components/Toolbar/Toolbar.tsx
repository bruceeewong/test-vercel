import { NavBackButton } from "@/app/2023-wrapped/components/NavBackButton";
import { Routes } from "@/configs/routes";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { Extendable } from "@/types/global";
import clsx from "clsx";

export type ToolbarProps = Extendable & {
  prevUrl?: string;
  nextUrl: string;
};

export const Toolbar = (props: ToolbarProps) => {
  return (
    <div
      className={clsx("flex justify-between items-center", props.className)}
      style={props.style}
    >
      <div>{props.prevUrl && <NavBackButton url={props.prevUrl} />}</div>
      <div className={"flex justify-end items-center gap-4"}>
        <Button className={"flex justify-center items-center gap-2"}>
          <Icon name={"screenshot"} size={16} />
          <span className={"gradient-blue text-md font-semibold"}>
            Copy as Image
          </span>
        </Button>
        <Button className={"flex justify-center items-center gap-2"}>
          <Icon name={"external-link"} size={16} />
          <span className={"gradient-blue text-md font-semibold"}>
            Post on X (Twitter)
          </span>
        </Button>

        <Button>
          <Link
            href={props.nextUrl}
            className={"flex  justify-center items-center gap-2"}
          >
            <span className={"gradient-blue text-md font-semibold"}>
              Continue
            </span>
            <Icon name={"arrow-right-gradient-blue"} size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};
