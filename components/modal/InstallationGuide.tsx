import { Extendable } from "@/types/global";
import * as Dialog from "@radix-ui/react-dialog";
import { IDefaultWallet } from "@suiet/wallet-kit";

export type InstallationGuideProps = Extendable & {
  wallet: IDefaultWallet;
  onClose?: () => void;
};

function SvgClose() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5L5 15M5 5L15 15"
        stroke="currentColor" // currentColor is neccessary for the color to be inherited
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const InstallationGuide = (props: InstallationGuideProps) => {
  const { wallet, onClose } = props;
  return (
    <section>
      <div className={"wkit-dialog__header"}>
        <Dialog.Title className={"wkit-dialog__title"}>
          Install Wallet
        </Dialog.Title>
        <Dialog.Close
          style={{ position: "absolute", right: "16px", top: "16px" }}
          className={"wkit-dialog__close"}
          onClick={onClose}
        >
          <SvgClose />
        </Dialog.Close>
      </div>
      <div className="wkit-install">
        <img
          className="wkit-install__logo"
          src={wallet.iconUrl}
          alt={`${wallet.name} logo`}
        />
        <h1 className="wkit-install__title">You haven’t install this wallet</h1>
        <p className="wkit-install__description">
          Install wallet via Chrome Extension Store
        </p>
        <button
          className="wkit-button wkit-install__button mt-4"
          onClick={() => {
            if (!wallet.downloadUrl?.browserExtension) {
              throw new Error(
                `no downloadUrl config on this wallet: ${wallet.name}`,
              );
            }
            window.open(wallet.downloadUrl.browserExtension, "_blank");
          }}
        >
          Get Wallet
        </button>
      </div>
    </section>
  );
};
