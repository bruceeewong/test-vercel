import { Metadata } from "next";
import Link from "next/link";

export type WelcomePageProps = {};

export const metadata: Metadata = {
  title: "Welcome",
};

export default function WelcomePage(props: WelcomePageProps) {
  return (
    <div>
      <h1>WelcomePage</h1>
      <Link href={"/2023-wrapped/review-txn"}>ReviewTxn</Link>
    </div>
  );
}
