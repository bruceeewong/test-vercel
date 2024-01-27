import { staticImg } from "@/configs/static-url";
import clsx from "clsx";
import styles from "@/app/2023-wrapped/summary/styles.module.css";
import Image from "next/image";
import { Extendable } from "@/types/global";

export type GridImageProps = Extendable & {
  imgName: string;
};

export const GridImage = (props: GridImageProps) => {
  const { imgName } = props;
  if (!imgName) return null;
  return (
    <Image
      src={staticImg(`wrap23-${imgName}.png`)}
      alt={imgName}
      layout="fill"
      objectFit="cover"
      className={clsx(styles["grid-img"], props.className)}
      style={props.style}
    />
  );
};
