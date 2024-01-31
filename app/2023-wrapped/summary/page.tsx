import { Metadata } from "next";
import clsx from "clsx";
import {
  SupportedSocialMedia,
  Toolbar,
  ToolbarCopyButton,
  ToolbarPrevButton,
  ToolbarShareButton,
} from "@/app/2023-wrapped/components/Toolbar";
import { Routes } from "@/configs/routes";
import { ToolbarCloseButton } from "@/app/2023-wrapped/components/Toolbar/ToolbarCloseButton";
import { StatisticCards } from "@/app/2023-wrapped/summary/components/StatisticCards";

type ReviewSummaryPageProps = {};

export const metadata: Metadata = {
  title: "Summary",
};

export default function ReviewSummaryPage(props: ReviewSummaryPageProps) {
  return (
    <main
      className={clsx(
        "flex flex-col flex-1 justify-center items-center bg-accent p-4",
      )}
    >
      <StatisticCards />

      <footer
        className={clsx("mt-16 mb-12", "md:mt-[40px] md:mb-0 md:w-[1200px]")}
      >
        <Toolbar className={clsx("justify-between gap-4", "")}>
          <ToolbarPrevButton url={Routes.WRAP23__REVIEW_NFT_DAPP} />
          <div className={"flex items-center gap-4"}>
            <ToolbarCopyButton />
            <ToolbarShareButton
              socialMediaName={SupportedSocialMedia.TWITTER}
            />
            <ToolbarCloseButton />
          </div>
        </Toolbar>
      </footer>
    </main>
  );
}
