import { Metadata } from "next";

export type ReviewSummaryPageProps = {};

export const metadata: Metadata = {
  title: "Summary",
};

export default function ReviewSummaryPage(props: ReviewSummaryPageProps) {
  return (
    <div>
      <h1>SummaryPage</h1>
    </div>
  );
}