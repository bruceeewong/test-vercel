import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import Link from "next/link";

export type NavBackButtonProps = Extendable & {
  url: string;
};

export const NavBackButton = (props: NavBackButtonProps) => {
  return (
    <Button className={props.className} style={props.style}>
      <Link href={props.url}>
        <Icon name={"arrow-right-gradient-blue"} size={16} rotate={180} />
      </Link>
    </Button>
  );
};
