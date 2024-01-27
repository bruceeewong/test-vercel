import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Extendable } from "@/types/global";
import clsx from "clsx";

export enum SupportedSocialMedia {
  TWITTER = "X (Twitter)",
}

export type ToolbarShareButtonProps = Extendable & {
  socialMediaName: SupportedSocialMedia;
};

export const ToolbarShareButton = (props: ToolbarShareButtonProps) => {
  return (
    <Button
      className={clsx(
        "flex justify-center items-center gap-2",
        props.className,
      )}
    >
      <Icon name={"external-link"} size={16} />
      <span
        className={clsx(
          "hidden gradient-blue text-md font-semibold",
          "md:block",
        )}
      >
        Post on {props.socialMediaName}
      </span>
    </Button>
  );
};
