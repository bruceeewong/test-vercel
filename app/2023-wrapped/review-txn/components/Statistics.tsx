"use client";

import clsx from "clsx";
import { HighlightText } from "@/app/2023-wrapped/components/HighlightText";
import { Skeleton } from "antd";
import { useState } from "react";
import { formatDateMMDD1 } from "@/utils/date/format";

export type StatisticsProps = {};

const ParagraphSkeleton = () => {
  return <Skeleton active={true} paragraph={{ rows: 8 }} />;
};

type TxnStatistics = {
  totalTxn: number;
  totalVolume: number;
  totalFees: number;
  totalCryptoKinds: number;
  firstTxnTimestamp: number;
  firstTxnVolume: number;
};

export const Statistics = (props: StatisticsProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TxnStatistics>({
    totalTxn: 0,
    totalVolume: 0,
    totalFees: 0,
    totalCryptoKinds: 0,
    firstTxnTimestamp: 0,
    firstTxnVolume: 0,
  });

  const renderEmpty = () => {
    return (
      <div>
        <p className={"main-font text-accent"}>2023,</p>
        <p className={"main-font text-accent"}>
          you have no transactions made, are you a holder or just watching the
          market?
        </p>
        <p className={"main-font text-accent mt-4"}>
          Suiet Wallet, The Sui wallet you have been waiting for, with a
          built-in Wallet, NFT, Swap, Dapps,
        </p>
        <p className={"main-font text-accent"}>
          <HighlightText>4 products</HighlightText> are filled with exciting
          features for your to explore
        </p>
      </div>
    );
  };

  const renderStatistics = () => {
    if (loading) {
      return <ParagraphSkeleton />;
    }
    if (!data.totalTxn) {
      return renderEmpty();
    }
    return (
      <>
        <div>
          <p className={"main-font text-accent"}>2023,</p>
          <p className={"main-font text-accent"}>
            you made <HighlightText>{data.totalTxn}</HighlightText>{" "}
            transactions, trading volume was{" "}
            <HighlightText>{data.totalVolume}</HighlightText> SUI
          </p>
        </div>
        <p className={"main-font text-accent mt-4"}>
          including <HighlightText>{data.totalFees}</HighlightText> SUI network
          fees, <HighlightText>{data.totalCryptoKinds}+</HighlightText> kinds of
          crypto traded
        </p>
        <p className={clsx("main-font text-accent mt-4")}>
          on {formatDateMMDD1(data.firstTxnTimestamp)},{" "}
          <HighlightText>{data.firstTxnVolume}</HighlightText> SUI was your
          first transaction
        </p>
      </>
    );
  };

  return (
    <div
      className={clsx(
        "flex flex-col max-w-sm mt-4",
        "md:pt-[40px] md:gap-4 md:max-w-[400px]",
      )}
    >
      {renderStatistics()}
    </div>
  );
};
