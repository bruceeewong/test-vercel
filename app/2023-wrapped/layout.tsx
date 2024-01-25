import Providers from "@/components/Providers";
import "@suiet/wallet-kit/style.css";
import "./util.css";

export default function Layout(props: { children: React.ReactNode }) {
  return <Providers>{props.children}</Providers>;
}
