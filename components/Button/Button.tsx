import { Extendable } from "@/types/global";
import clsx from "clsx";

export type ButtonProps = Extendable & {
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-6 py-4 bg-white rounded-full btn-shadow",
        "hover:bg-gray-btn-hover",
        props.className,
      )}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
