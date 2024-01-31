"use client";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import clsx from "clsx";
import { Extendable } from "@/types/global";
import { useCallback } from "react";
import { debounce } from "next/dist/server/utils";

export type ToolbarCopyButtonProps = Extendable & {};

export const ToolbarScreenshotButton = (props: ToolbarCopyButtonProps) => {
  const handleScreenshot = useCallback(
    debounce(() => {
      const url = window.location.origin + "/screenshot";
      window.open(url, "_blank", "popup,width=600,height=400,left=200,top=200");
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
