import {
  NavBackButton,
  NavBackButtonProps,
} from "@/app/2023-wrapped/components/NavBackButton";

export type ToolbarPrevButtonProps = NavBackButtonProps;

export const ToolbarPrevButton = (props: ToolbarPrevButtonProps) => {
  return <NavBackButton {...props} />;
};
