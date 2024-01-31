"use client";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import clsx from "clsx";
import { Extendable } from "@/types/global";
import { useCallback } from "react";
import { debounce } from "next/dist/server/utils";

export type ToolbarScreenshotButtonProps = Extendable & {
  screenshotName?: string;
};

export const ToolbarScreenshotButton = (
  props: ToolbarScreenshotButtonProps,
) => {
  const handleScreenshot = useCallback(
    debounce(() => {
      let url = window.location.origin + `/screenshot`;
      if (props.screenshotName) {
        url += `?screenshot=${props.screenshotName}`;
      }
      window.open(url, "_blank", "popup,width=800,height=800,left=200,top=200");
    }, 1000),
    [],
  );

  return (
    <>
      <Button
        className={clsx(
          "flex justify-center items-center gap-2",
          props.className,
        )}
        onClick={handleScreenshot}
      >
        <Icon name={"screenshot"} size={16} />
        <span
          className={clsx(
            "hidden gradient-blue text-md font-semibold",
            "md:block",
          )}
        >
          Save as Image
        </span>
      </Button>
    </>
  );
};
