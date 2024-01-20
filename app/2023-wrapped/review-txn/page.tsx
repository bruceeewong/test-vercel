import { Metadata } from "next";
import Link from "next/link";

export type ReviewTxnPageeProps = {};

export const metadata: Metadata = {
  title: "Review Txn",
};

export default function ReviewTxnPage(props: ReviewTxnPageeProps) {
  return (
    <div>
      <h1>ReviewTxnPage</h1>
      <Link href={"/2023-wrapped/review-nft-dapp"}>ReviewNft</Link>
    </div>
  );
}
