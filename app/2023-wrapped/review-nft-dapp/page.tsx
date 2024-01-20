import { Metadata } from "next";
import Link from "next/link";

export type ReviewNftDappPageProps = {};

export const metadata: Metadata = {
  title: "Review Nft & Dapp",
};

export default function ReviewNftDappPage(props: ReviewNftDappPageProps) {
  return (
    <div>
      <h1>ReviewNftDappPage</h1>
      <Link href={"/2023-wrapped/summary"}>Summary</Link>
    </div>
  );
}
