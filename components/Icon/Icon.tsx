import clsx from "clsx";
import { Extendable } from "@/types/global";
import { iconMap } from "@/components/Icon/config";
import Image from "next/image";

export type IconProps = Extendable & {
  name: keyof typeof iconMap;
  size?: number;
  rotate?: number;
};

export const Icon = (props: IconProps) => {
  const { size = 24, rotate = 0 } = props;
  const icon = iconMap[props.name];

  return (
    <i className={clsx(props.className)} style={props.style}>
      <Image
        src={`/icon/${icon}`}
        alt={props.name}
        width={size}
        height={size}
        style={{
          transform: `rotate(${props.rotate}deg)`,
        }}
      />
    </i>
  );
};
