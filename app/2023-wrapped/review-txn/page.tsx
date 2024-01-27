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

export type ReviewTxnPageeProps = {};

export const metadata: Metadata = {
  title: "Review Txn",
};

export default function ReviewTxnPage(props: ReviewTxnPageeProps) {
  return (
    <main
      className={"flex flex-col flex-1 justify-center items-center bg-accent"}
    >
      <SoftCard className={"w-[1200px] h-[660px]"}>
        <div className={"flex justify-center w-full h-full p-16  gap-16"}>
          <TxnCards />
          <div className={"flex flex-col max-w-[400px] gap-4 pt-[40px]"}>
            <div>
              <p className={"main-font text-accent"}>2023,</p>
              <p className={"main-font text-accent"}>
                you made <HighlightText>36</HighlightText> transactions, trading
                volume was <HighlightText>129</HighlightText> SUI
              </p>
            </div>
            <p className={"main-font text-accent"}>
              including <HighlightText>19.4</HighlightText> SUI network fees,{" "}
              <HighlightText>20+</HighlightText> kinds of crypto traded
            </p>
            <p className={"main-font text-accent"}>
              on 9 Jan, <HighlightText>12.8</HighlightText> SUI was your first
              transaction
            </p>
          </div>
        </div>
      </SoftCard>

      <footer className={"mt-[40px]"}>
        <Toolbar className={"w-[1200px] !justify-end gap-4"}>
          <ToolbarCopyButton />
          <ToolbarShareButton socialMediaName={SupportedSocialMedia.TWITTER} />
          <ToolbarContinueButton url={Routes.WRAP23__REVIEW_NFT_DAPP} />
        </Toolbar>
      </footer>
    </main>
  );
}
