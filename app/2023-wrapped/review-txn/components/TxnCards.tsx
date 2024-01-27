import Image from "next/image";

export type TxnCardsProps = {};

export const TxnCards = (props: TxnCardsProps) => {
  return (
    <div className={"relative h-[500px]"}>
      <Image
        src={"/img/wrap23-txn-cards.png"}
        width={520}
        height={500}
        alt={"txn-cards"}
      />
    </div>
  );
};
