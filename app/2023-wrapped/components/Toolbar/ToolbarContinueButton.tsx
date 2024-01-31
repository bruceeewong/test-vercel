import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import clsx from "clsx";
import Link from "next/link";

export type ToolbarContinueButtonProps = Extendable & {
  url: string;
  buttonClassName?: string;
};

export const ToolbarContinueButton = (props: ToolbarContinueButtonProps) => {
  return (
    <Link href={props.url} className={props.className}>
      <Button
        className={clsx(
          "flex justify-center items-center gap-2",
          props.buttonClassName,
        )}
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
      </Button>
    </Link>
  );
};
