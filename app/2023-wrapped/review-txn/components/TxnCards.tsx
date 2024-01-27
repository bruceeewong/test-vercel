import Image from "next/image";
import clsx from "clsx";

export type TxnCardsProps = {};

export const TxnCards = (props: TxnCardsProps) => {
  return (
    <div
      className={clsx("relative flex justify-center", "md:block md:h-[500px]")}
    >
      <Image
        src={"/img/wrap23-txn-cards.png"}
        width={520}
        height={500}
        alt={"txn-cards"}
        className={clsx("w-[210px] h-[200px]", "md:w-[520px] md:h-[500px]")}
      />
    </div>
  );
};
