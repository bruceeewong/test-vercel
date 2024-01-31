import { Extendable } from "@/types/global";
import clsx from "clsx";

export type ButtonProps = Extendable & {
  hasShadow?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { hasShadow = true } = props;
  return (
    <button
      className={clsx(
        "px-6 py-4 bg-white rounded-full text",
        "hover:bg-gray-btn-hover",
        { "btn-shadow": hasShadow },
        props.className,
      )}
      style={props.style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </button>
  );
};
