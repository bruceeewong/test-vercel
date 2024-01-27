import { Metadata } from "next";
import { SoftCard } from "@/app/2023-wrapped/components/SoftCard";
import { NftCards } from "@/app/2023-wrapped/review-nft-dapp/components/NftCards";
import { HighlightText } from "@/app/2023-wrapped/components/HighlightText";
import { Toolbar } from "@/app/2023-wrapped/components/Toolbar";
import { Routes } from "@/configs/routes";

export type ReviewNftDappPageProps = {};

export const metadata: Metadata = {
  title: "Review Nft & Dapp",
};

export default function ReviewNftDappPage(props: ReviewNftDappPageProps) {
  return (
    <main
      className={"flex flex-col flex-1 justify-center items-center bg-accent"}
    >
      <SoftCard className={"w-[1200px] h-[660px]"}>
        <div className={"flex justify-center w-full h-full p-16 gap-16"}>
          <NftCards />
          <div className={"flex flex-col max-w-[400px] gap-4 pt-[40px]"}>
            <div>
              <p className={"main-font text-accent"}>2023,</p>
              <p className={"main-font text-accent"}>
                you used <HighlightText>26</HighlightText> DApps, including{" "}
                <HighlightText>11</HighlightText> investments completed36
              </p>
            </div>
            <p className={"main-font text-accent"}>
              you made <HighlightText>25</HighlightText> NFT transactions, on 28
              Sep, <HighlightText>79.8</HighlightText> SUI was your your largest
              NFT purchase
            </p>
          </div>
        </div>
      </SoftCard>
      <footer className={"mt-[40px]"}>
        <Toolbar
          prevUrl={Routes.WRAP23__REVIEW_TXN}
          nextUrl={Routes.WRAP23__SUMMARY}
          className={"w-[1200px]"}
        />
      </footer>
    </main>
  );
}
