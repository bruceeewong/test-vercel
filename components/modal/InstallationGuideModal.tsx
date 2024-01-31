import { BaseModal } from "@/components/modal/BaseModal";
import { Extendable } from "@/types/global";
import { InstallationGuide } from "@/components/modal/InstallationGuide";
import { IDefaultWallet } from "@suiet/wallet-kit";

export type InstallationGuideModalProps = Extendable & {
  wallet: IDefaultWallet;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const InstallationGuideModal = (props: InstallationGuideModalProps) => {
  return (
    <BaseModal
      open={props.open}
      onOpenChange={props.onOpenChange}
      trigger={props.children}
      contentProps={{
        onOpenAutoFocus: (e: Event) => {
          e.preventDefault();
        },
      }}
    >
      <InstallationGuide
        wallet={props.wallet}
        onClose={() => {
          props?.onOpenChange?.(false);
        }}
      />
    </BaseModal>
  );
};
