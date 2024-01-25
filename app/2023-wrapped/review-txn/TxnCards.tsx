import { Card } from "@/components/Card";
import TxnCardBlue from "@/public/img/txn-card--blue.svg";
import TxnCardWhite from "@/public/img/txn-card--white.svg";

export type TxnCardsProps = {};

export const TxnCards = (props: TxnCardsProps) => {
  return (
    <div className={"relative h-[500px]"}>
      <TxnCardBlue className={"transform -rotate-2"} />
      <TxnCardWhite
        className={
          "absolute top-0 transform -rotate-[4deg] translate-x-[78px] translate-y-[70px]"
        }
      />
    </div>
  );
};
