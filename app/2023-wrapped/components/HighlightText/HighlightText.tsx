import { Extendable } from "@/types/global";
import clsx from "clsx";
import styles from "./style.module.css";

export type HighlightTextProps = Extendable & {};

export const HighlightText = (props: HighlightTextProps) => {
  return (
    <span className={clsx("relative", props.className)} style={props.style}>
      <span className={styles["text"]}>{props.children}</span>
      <span className={styles["highlight-mark"]} />
    </span>
  );
};
