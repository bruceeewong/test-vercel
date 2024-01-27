import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import clsx from "clsx";
import Link from "next/link";

export type ToolbarContinueButtonProps = Extendable & {
  url: string;
};

export const ToolbarContinueButton = (props: ToolbarContinueButtonProps) => {
  return (
    <Button
      className={clsx(
        "flex justify-center items-center gap-2",
        props.className,
      )}
    >
      <Link
        href={props.url}
        className={"flex  justify-center items-center gap-2"}
      >
        <span
          className={clsx(
            "hidden gradient-blue text-md font-semibold",
            "md:block",
          )}
        >
          Continue
        </span>
        <Icon name={"arrow-right-gradient-blue"} size={16} />
      </Link>
    </Button>
  );
};
