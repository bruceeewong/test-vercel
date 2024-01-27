import { Extendable } from "@/types/global";
import clsx from "clsx";

export type ToolbarProps = Extendable & {};

export const Toolbar = (props: ToolbarProps) => {
  return (
    <div
      className={clsx("flex justify-between items-center", props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
