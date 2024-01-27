import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import clsx from "clsx";
import Link from "next/link";

export type ToolbarCloseButtonProps = Extendable & {
  onClose?: () => void;
};

export const ToolbarCloseButton = (props: ToolbarCloseButtonProps) => {
  return (
    <Button
      className={clsx(
        "flex justify-center items-center gap-2",
        props.className,
      )}
    >
      <div
        className={"flex justify-center items-center gap-2"}
        onClick={props.onClose}
      >
        <span className={"gradient-blue text-md font-semibold"}>Close</span>
        <Icon name={"close-gradient-blue"} size={16} />
      </div>
    </Button>
  );
};
