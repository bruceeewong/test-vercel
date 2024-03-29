"use client";

import clsx from "clsx";
import styles from "@/app/2023-wrapped/summary/styles.module.css";
import { GridImage } from "@/app/2023-wrapped/summary/components/GridImage";
import SuietLogoBare from "@/public/img/suiet-logo-bare.svg";
import { useState } from "react";
import { formatDateMMDDYYYY1 } from "@/utils/date/format";

export type StatisticCardsProps = {};

type SummaryStatistics = {
  totalTxnMade: number;
  totalNftTxn: number;
  totalNetworkFees: number;
  totalSuiTvl: number;
  suiTvlUpdatedTimestamp: number;
  totalTradingVolume: number;
  totalDappUsed: number;
  totalInvestments: number;
  totalCryptoTraded: number;
};

export const StatisticCards = (props: StatisticCardsProps) => {
  const [data, setData] = useState<SummaryStatistics>({
    totalTxnMade: 36,
    totalNftTxn: 35,
    totalNetworkFees: 19.62,
    totalSuiTvl: 263.36,
    suiTvlUpdatedTimestamp: 1706732540414,
    totalTradingVolume: 61.9,
    totalDappUsed: 26,
    totalInvestments: 11,
    totalCryptoTraded: 20,
  });

  return (
    <section className={clsx("", "md:w-[1200px] md:h-[620px]")}>
      <div className={clsx(styles["grid-container"])}>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-txn-made"],
            "rounded-[20px]",
          )}
        >
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "text-white")}>
              {data.totalTxnMade}
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
              Transactions made
            </h2>
          </div>
          <GridImage imgName={"txn-made"} />
        </div>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-network-fees"],
            "flex flex-col justify-end",
          )}
        >
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "gradient-blue")}>
              {data.totalNetworkFees}
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-cool-700")}>
              Network fees
            </h2>
          </div>
          <GridImage imgName={"network-fees"} />
        </div>
        <div className={clsx(styles["grid-item"], styles["grid-item-sui-tvl"])}>
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "text-white")}>
              {data.totalSuiTvl}m
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
              SUI total value locked (TVL)
            </h2>
            <p className={clsx(styles["heading-3"], "text-gray-300")}>
              Updated on {formatDateMMDDYYYY1(data.suiTvlUpdatedTimestamp)}
            </p>
          </div>
          <GridImage imgName={"sui-tvl"} />
        </div>
        <div className={clsx(styles["grid-item"], styles["grid-item-defi"])}>
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "text-white")}>
              DeFi
              <span className={clsx(styles["sub-heading-1"], "ml-1")}>
                builder
              </span>
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
              No matter where we are
            </h2>
          </div>
          <GridImage imgName={"defi"} />
        </div>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-investment"],
            "flex flex-col justify-end",
          )}
        >
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "text-white")}>
              {data.totalInvestments}
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
              Investments
            </h2>
            <h2 className={clsx(styles["heading-1"], "text-white mt-4")}>
              {data.totalCryptoTraded}+
            </h2>
            <p className={clsx(styles["heading-2"], "text-gray-100")}>
              Crypto traded
            </p>
          </div>
          <GridImage imgName={"investment"} />
        </div>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-sui-volume"],
            "flex flex-col justify-end",
          )}
        >
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "text-white")}>
              {data.totalTradingVolume}
              <span className={clsx(styles["sub-heading-1"], "ml-1")}>SUI</span>
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
              Total trading volume
            </h2>
          </div>
          <GridImage imgName={"sui-volume"} />
        </div>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-logo"],
            "flex flex-col justify-center",
          )}
        >
          <div className={"relative z-10 flex flex-col items-center gap-2"}>
            <SuietLogoBare />
            <h1
              className={clsx(styles["heading-hero"], "text-white text-center")}
            >
              Suiet Wrapped 2023
            </h1>
          </div>
          <GridImage imgName={"summary-logo-bg"} />
        </div>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-nft"],
            "flex flex-col justify-end",
          )}
        >
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "gradient-blue")}>
              {data.totalNftTxn}
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-cool-700")}>
              NFT transactions
            </h2>
          </div>
          <GridImage imgName={"nft"} />
        </div>
        <div
          className={clsx(
            styles["grid-item"],
            styles["grid-item-dapp"],
            "flex flex-col justify-end",
          )}
        >
          <div className={"relative z-10 p-[24px]"}>
            <h2 className={clsx(styles["heading-1"], "text-white")}>
              {data.totalDappUsed}
            </h2>
            <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
              Dapps used
            </h2>
          </div>
          <GridImage imgName={"dapp"} />
        </div>
      </div>
    </section>
  );
};
