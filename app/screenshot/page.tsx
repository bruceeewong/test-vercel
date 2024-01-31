import { ScreenshotClientCode } from "@/app/screenshot/ScreenshotClientCode";
import SuietLogoSvg from "@/public/img/suiet-logo-bare.svg";

export type ComponentProps = {};

export default function Screenshot(props: ComponentProps) {
  return (
    <div
      className={"flex flex-col flex-1 justify-center items-center bg-accent"}
    >
      <SuietLogoSvg />
      <h2 className={"text-white text-2xl font-bold mt-4"}>
        Suiet Screenshot Helper
      </h2>
      <p className={"text-gray-100 text-md mt-1"}>
        Select the corresponding tab to take a screenshot
      </p>
      <ScreenshotClientCode />
    </div>
  );
}
