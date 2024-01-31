import { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.css";
import clsx from "clsx";
import { GridImage } from "@/app/2023-wrapped/summary/components/GridImage";
import {
  SupportedSocialMedia,
  Toolbar,
  ToolbarContinueButton,
  ToolbarCopyButton,
  ToolbarPrevButton,
  ToolbarShareButton,
} from "@/app/2023-wrapped/components/Toolbar";
import { Routes } from "@/configs/routes";
import { ToolbarCloseButton } from "@/app/2023-wrapped/components/Toolbar/ToolbarCloseButton";
import SuietLogoBare from "@/public/img/suiet-logo-bare.svg";

type ReviewSummaryPageProps = {};

export const metadata: Metadata = {
  title: "Summary",
};

export default function ReviewSummaryPage(props: ReviewSummaryPageProps) {
  return (
    <main
      className={clsx(
        "flex flex-col flex-1 justify-center items-center bg-accent p-4",
      )}
    >
      <section className={clsx("", "md:w-[1200px] md:h-[660px]")}>
        <div className={clsx(styles["grid-container"])}>
          <div
            className={clsx(
              styles["grid-item"],
              styles["grid-item-txn-made"],
              "rounded-[20px]",
            )}
          >
            <div className={"relative z-10 p-[24px]"}>
              <h2 className={clsx(styles["heading-1"], "text-white")}>36</h2>
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
                19.62
              </h2>
              <h2 className={clsx(styles["heading-2"], "text-gray-cool-700")}>
                Network fees
              </h2>
            </div>
            <GridImage imgName={"network-fees"} />
          </div>
          <div
            className={clsx(styles["grid-item"], styles["grid-item-sui-tvl"])}
          >
            <div className={"relative z-10 p-[24px]"}>
              <h2 className={clsx(styles["heading-1"], "text-white")}>
                263.36m
              </h2>
              <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
                SUI total value locked (TVL)
              </h2>
              <p className={clsx(styles["heading-3"], "text-gray-300")}>
                Updated on 01/13/2024
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
              <h2 className={clsx(styles["heading-1"], "text-white")}>11</h2>
              <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
                Investments
              </h2>
              <h2 className={clsx(styles["heading-1"], "text-white mt-4")}>
                20+
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
                61.9
                <span className={clsx(styles["sub-heading-1"], "ml-1")}>
                  SUI
                </span>
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
                className={clsx(
                  styles["heading-hero"],
                  "text-white text-center",
                )}
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
                19.62
              </h2>
              <h2 className={clsx(styles["heading-2"], "text-gray-cool-700")}>
                Network fees
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
              <h2 className={clsx(styles["heading-1"], "text-white")}>26</h2>
              <h2 className={clsx(styles["heading-2"], "text-gray-100")}>
                Dapps used
              </h2>
            </div>
            <GridImage imgName={"dapp"} />
          </div>
        </div>
      </section>

      <footer
        className={clsx("mt-16 mb-12", "md:mt-[40px] md:mb-0 md:w-[1200px]")}
      >
        <Toolbar className={clsx("justify-between gap-4", "")}>
          <ToolbarPrevButton url={Routes.WRAP23__REVIEW_NFT_DAPP} />
          <div className={"flex items-center gap-4"}>
            <ToolbarCopyButton />
            <ToolbarShareButton
              socialMediaName={SupportedSocialMedia.TWITTER}
            />
            <ToolbarCloseButton />
          </div>
        </Toolbar>
      </footer>
    </main>
  );
}
