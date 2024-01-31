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

type NftDappStatistics = {
  totalDapp: number;
  totalInvestmentDapp: number;
  mostNftTxn: number;
  mostNftTxnTimestamp: number;
  largestNftPrice: number;
};

export const Statistics = (props: StatisticsProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<NftDappStatistics>({
    totalDapp: 0,
    totalInvestmentDapp: 0,
    mostNftTxn: 0,
    mostNftTxnTimestamp: 0,
    largestNftPrice: 0,
  });

  const renderDappStatistics = () => {
    if (!data.totalDapp) {
      return (
        <p className={"main-font text-accent"}>
          you didn’t use any DApps, we&apos;ve aggregated{" "}
          <HighlightText>11</HighlightText> DApps, including types of Finance,
          NFT marketplace, and Social
        </p>
      );
    }
    return (
      <p className={"main-font text-accent"}>
        you used <HighlightText>{data.totalDapp}</HighlightText> DApps,
        including <HighlightText>{data.totalInvestmentDapp}</HighlightText>{" "}
        investments completed
      </p>
    );
  };

  const renderNftStatistics = () => {
    if (!data.mostNftTxn) {
      return (
        <div>
          <p className={"main-font text-accent"}>
            you didn’t mint or buy any NFTs, are you waiting the next NFT growth
            timing?
          </p>
        </div>
      );
    }
    return (
      <p className={"main-font text-accent mt-4"}>
        you made <HighlightText>{data.mostNftTxn}</HighlightText> NFT
        transactions, on {formatDateMMDD1(data.mostNftTxnTimestamp)},{" "}
        <HighlightText>{data.largestNftPrice}</HighlightText> SUI was your your
        largest NFT purchase
      </p>
    );
  };

  const renderStatistics = () => {
    if (loading) {
      return <ParagraphSkeleton />;
    }
    return (
      <>
        <div>
          <p className={"main-font text-accent"}>2023,</p>
          {renderDappStatistics()}
        </div>
        {renderNftStatistics()}
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
