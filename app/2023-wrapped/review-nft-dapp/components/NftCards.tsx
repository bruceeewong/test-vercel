import Image from "next/image";

export type TxnCardsProps = {};

export const NftCards = (props: TxnCardsProps) => {
  return (
    <div className={"relative h-[500px]"}>
      <Image
        src={"/img/wrap23-nft-cards.png"}
        width={520}
        height={500}
        alt={"nft-cards"}
      />
    </div>
  );
};
