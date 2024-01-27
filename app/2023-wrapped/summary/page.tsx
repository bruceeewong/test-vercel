import { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.css";
import clsx from "clsx";
import { staticImg } from "@/configs/static-url";
import { GridImage } from "@/app/2023-wrapped/summary/components/GridImage";

export type ReviewSummaryPageProps = {};

export const metadata: Metadata = {
  title: "Summary",
};

export default function ReviewSummaryPage(props: ReviewSummaryPageProps) {
  return (
    <main
      className={"flex flex-col flex-1 justify-center items-center bg-accent"}
    >
      <section className={"w-[1280px] h-[680px]"}>
        <div className={clsx(styles["grid-container"])}>
          <div
            className={clsx(
              styles["grid-item"],
              styles["grid-item-txn-made"],
              "rounded-[20px]",
            )}
          >
            <GridImage imgName={"txn-made"} />
          </div>
          <div
            className={clsx(
              styles["grid-item"],
              styles["grid-item-network-fees"],
            )}
          >
            <GridImage imgName={"network-fees"} />
          </div>
          <div
            className={clsx(styles["grid-item"], styles["grid-item-sui-tvl"])}
          >
            <GridImage imgName={"sui-tvl"} />
          </div>
          <div className={clsx(styles["grid-item"], styles["grid-item-defi"])}>
            <GridImage imgName={"defi"} />
          </div>
          <div
            className={clsx(
              styles["grid-item"],
              styles["grid-item-investment"],
            )}
          >
            <GridImage imgName={"investment"} />
          </div>
          <div
            className={clsx(
              styles["grid-item"],
              styles["grid-item-sui-volume"],
            )}
          >
            <GridImage imgName={"sui-volume"} />
          </div>
          <div className={clsx(styles["grid-item"], styles["grid-item-nft"])}>
            <GridImage imgName={"nft"} />
          </div>
          <div className={clsx(styles["grid-item"], styles["grid-item-dapp"])}>
            <GridImage imgName={"dapp"} />
          </div>
        </div>
      </section>
    </main>
  );
}
