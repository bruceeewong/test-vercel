import clsx from "clsx";
import { Extendable } from "@/types/global";

export type CardProps = Extendable & {};

export const Card = (props: CardProps) => {
  return (
    <div
      className={clsx("p-8 bg-white rounded-3xl", props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
