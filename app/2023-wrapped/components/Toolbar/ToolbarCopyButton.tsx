import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import clsx from "clsx";
import { Extendable } from "@/types/global";

export type ToolbarCopyButtonProps = Extendable & {};

export const ToolbarCopyButton = (props: ToolbarCopyButtonProps) => {
  return (
    <Button
      className={clsx(
        "flex justify-center items-center gap-2",
        props.className,
      )}
    >
      <Icon name={"screenshot"} size={16} />
      <span
        className={clsx(
          "hidden gradient-blue text-md font-semibold",
          "md:block",
        )}
      >
        Copy as Image
      </span>
    </Button>
  );
};
