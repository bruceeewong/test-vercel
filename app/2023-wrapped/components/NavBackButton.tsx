import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import Link from "next/link";

export type NavBackButtonProps = Extendable & {
  url: string;
  buttonClassName?: string;
};

export const NavBackButton = (props: NavBackButtonProps) => {
  return (
    <Link href={props.url} className={props.className}>
      <Button className={props.buttonClassName} style={props.style}>
        <Icon name={"arrow-right-gradient-blue"} size={16} rotate={180} />
      </Button>
    </Link>
  );
};
