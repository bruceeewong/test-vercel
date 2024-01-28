import { Metadata } from "next";
import { SoftCard } from "@/app/2023-wrapped/components/SoftCard";
import { NftCards } from "@/app/2023-wrapped/review-nft-dapp/components/NftCards";
import { HighlightText } from "@/app/2023-wrapped/components/HighlightText";
import {
  SupportedSocialMedia,
  Toolbar,
  ToolbarContinueButton,
  ToolbarCopyButton,
  ToolbarPrevButton,
  ToolbarShareButton,
} from "@/app/2023-wrapped/components/Toolbar";
import { Routes } from "@/configs/routes";
import clsx from "clsx";

export type ReviewNftDappPageProps = {};

export const metadata: Metadata = {
  title: "Review Nft & Dapp",
};

export default function ReviewNftDappPage(props: ReviewNftDappPageProps) {
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
          <NftCards />
          <div
            className={clsx(
              "flex flex-col max-w-sm mt-4",
              "md:pt-[40px] md:gap-4 md:max-w-[400px]",
            )}
          >
            <div>
              <p className={"main-font text-accent"}>2023,</p>
              <p className={"main-font text-accent"}>
                you used <HighlightText>26</HighlightText> DApps, including{" "}
                <HighlightText>11</HighlightText> investments completed36
              </p>
            </div>
            <p className={"main-font text-accent mt-4"}>
              you made <HighlightText>25</HighlightText> NFT transactions, on 28
              Sep, <HighlightText>79.8</HighlightText> SUI was your your largest
              NFT purchase
            </p>
          </div>
        </div>
      </SoftCard>
      <footer className={clsx("mt-16 mb-12", "md:mt-[40px] md:mb-0")}>
        <Toolbar className={clsx("justify-end gap-4", "md:w-[1200px]")}>
          <ToolbarPrevButton url={Routes.WRAP23__REVIEW_TXN} />
          <div className={"flex items-center gap-4"}>
            <ToolbarCopyButton />
            <ToolbarShareButton
              socialMediaName={SupportedSocialMedia.TWITTER}
            />
            <ToolbarContinueButton url={Routes.WRAP23__SUMMARY} />
          </div>
        </Toolbar>
      </footer>
    </main>
  );
}
