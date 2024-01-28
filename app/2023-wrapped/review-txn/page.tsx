import { Metadata } from "next";
import { SoftCard } from "@/app/2023-wrapped/components/SoftCard";
import { TxnCards } from "@/app/2023-wrapped/review-txn/components/TxnCards";
import { HighlightText } from "@/app/2023-wrapped/components/HighlightText/HighlightText";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { Routes } from "@/configs/routes";
import { NavBackButton } from "@/app/2023-wrapped/components/NavBackButton";
import {
  SupportedSocialMedia,
  Toolbar,
  ToolbarContinueButton,
  ToolbarCopyButton,
  ToolbarPrevButton,
  ToolbarShareButton,
} from "@/app/2023-wrapped/components/Toolbar";
import clsx from "clsx";

export type ReviewTxnPageeProps = {};

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
        className={clsx("flex-1", "md:w-[1200px] md:h-[660px] md:flex-none")}
      >
        <div
          className={clsx(
            "flex flex-col justify-center w-[100vw] py-12 px-10",
            "md:flex-row md:p-16 md:gap-16 md:w-full",
          )}
        >
          <TxnCards />
          <div
            className={clsx(
              "flex flex-col max-w-sm mt-4",
              "md:pt-[40px] md:gap-4 md:max-w-[400px]",
            )}
          >
            <div>
              <p className={"main-font text-accent"}>2023,</p>
              <p className={"main-font text-accent"}>
                you made <HighlightText>36</HighlightText> transactions, trading
                volume was <HighlightText>129</HighlightText> SUI
              </p>
            </div>
            <p className={"main-font text-accent  mt-4"}>
              including <HighlightText>19.4</HighlightText> SUI network fees,{" "}
              <HighlightText>20+</HighlightText> kinds of crypto traded
            </p>
            <p className={clsx("main-font text-accent mt-4")}>
              on 9 Jan, <HighlightText>12.8</HighlightText> SUI was your first
              transaction
            </p>
          </div>
        </div>
      </SoftCard>

      <footer className={clsx("mt-16 mb-12", "md:mt-[40px] md:mb-0")}>
        <Toolbar
          className={clsx("justify-end gap-4", "md:w-[1200px] md:justify-end")}
        >
          <ToolbarCopyButton />
          <ToolbarShareButton socialMediaName={SupportedSocialMedia.TWITTER} />
          <ToolbarContinueButton url={Routes.WRAP23__REVIEW_NFT_DAPP} />
        </Toolbar>
      </footer>
    </main>
  );
}
