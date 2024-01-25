import clsx from "clsx";
import { Extendable } from "@/types/global";

export type SoftCardProps = Extendable & {};

export const SoftCard = (props: SoftCardProps) => {
  return (
    <div
      className={clsx("p-8 rounded-3xl bg-white", props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
