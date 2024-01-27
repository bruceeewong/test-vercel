import clsx from "clsx";
import { Extendable } from "@/types/global";
import IrregularRect from "@/public/img/wrap23-irregular-rect.svg";

export type SoftCardProps = Extendable & {};

export const SoftCard = (props: SoftCardProps) => {
  return (
    <div className={clsx("relative", props.className)} style={props.style}>
      <IrregularRect
        className={"w-full h-auto absolute top-0 left-0 right-0 border-0"}
      />
      <div className={"relative z-10 w-full h-full"}>{props.children}</div>
    </div>
  );
};
