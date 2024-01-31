import { Metadata } from "next";
import { SoftCard } from "@/app/2023-wrapped/components/SoftCard";
import { TxnCards } from "@/app/2023-wrapped/review-txn/components/TxnCards";
import { HighlightText } from "@/app/2023-wrapped/components/HighlightText/HighlightText";
import { Routes } from "@/configs/routes";
import {
  SupportedSocialMedia,
  Toolbar,
  ToolbarContinueButton,
  ToolbarScreenshotButton,
  ToolbarShareButton,
} from "@/app/2023-wrapped/components/Toolbar";
import clsx from "clsx";
import { Statistics } from "@/app/2023-wrapped/review-txn/components/Statistics";
import { AccountButton } from "@/components/wallet-kit/AccountButton";

type ReviewTxnPageeProps = {};

export const metadata: Metadata = {
  title: "Review Txn",
};

export default function ReviewTxnPage(props: ReviewTxnPageeProps) {
  return (
    <main
      className={clsx(
        "flex flex-col flex-1 bg-accent items-center overflow-hidden",
        "md:justify-center md:items-center md:overflow-auto",
      )}
    >
      <SoftCard
        className={clsx(
          "relative flex-1",
          "md:w-[1200px] md:h-[660px] md:flex-none",
        )}
      >
        <AccountButton
          className={
            "absolute -top-4 left-[50%] transform -translate-x-[50%] w-[200px]"
          }
        />
        <div
          className={clsx(
            "flex flex-col justify-center w-[100vw] py-12 px-10",
            "md:flex-row md:p-16 md:gap-16 md:w-full",
          )}
        >
          <TxnCards />
          <Statistics />
        </div>
      </SoftCard>

      <footer className={clsx("mt-16 mb-12", "md:mt-4 md:mb-0")}>
        <Toolbar
          className={clsx("justify-end gap-4", "md:w-[1200px] md:justify-end")}
        >
          <ToolbarScreenshotButton
            screenshotName={"suiet-2023wrapped-transaction-review"}
          />
          <ToolbarShareButton socialMediaName={SupportedSocialMedia.TWITTER} />
          <ToolbarContinueButton url={Routes.WRAP23__REVIEW_NFT_DAPP} />
        </Toolbar>
      </footer>
    </main>
  );
}
