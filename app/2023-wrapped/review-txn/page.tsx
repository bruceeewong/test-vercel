import { Metadata } from "next";
import { SoftCard } from "@/app/2023-wrapped/components/SoftCard";
import { TxnCards } from "./TxnCards";
import { HighlightText } from "@/app/2023-wrapped/components/HighlightText/HighlightText";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export type ReviewTxnPageeProps = {};

export const metadata: Metadata = {
  title: "Review Txn",
};

export default function ReviewTxnPage(props: ReviewTxnPageeProps) {
  return (
    <main
      className={"flex flex-col flex-1 justify-center items-center bg-accent"}
    >
      <SoftCard
        className={"flex justify-between w-[1200px] p-[96px] rounded-[50px]"}
      >
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
      </SoftCard>
      <footer
        className={"w-[1200px] flex justify-between items-center mt-[40px]"}
      >
        <Button className={""}>
          <Icon name={"arrow-right-gradient-blue"} size={16} rotate={180} />
        </Button>
        <div className={"flex justify-end items-center gap-4"}>
          <Button className={"flex justify-center items-center gap-2"}>
            <Icon name={"screenshot"} size={16} />
            <span className={"gradient-blue text-md font-semibold"}>
              Copy as Image
            </span>
          </Button>
          <Button className={"flex justify-center items-center gap-2"}>
            <Icon name={"external-link"} size={16} />
            <span className={"gradient-blue text-md font-semibold"}>
              Post on X (Twitter)
            </span>
          </Button>

          <Button className={"flex  justify-center items-center gap-2"}>
            <span className={"gradient-blue text-md font-semibold"}>
              Continue
            </span>
            <Icon name={"arrow-right-gradient-blue"} size={16} />
          </Button>
        </div>
      </footer>
      {/*<Link href={"/2023-wrapped/review-nft-dapp"}>ReviewNft</Link>*/}
    </main>
  );
}
