import Providers from "@/components/Providers";
import "@suiet/wallet-kit/style.css";
import "./util.css";
import { Guards } from "@/app/2023-wrapped/components/Guards";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Providers>
      <Guards>{props.children}</Guards>
    </Providers>
  );
}
