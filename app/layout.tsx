// These styles apply to every route in the application
import "./global.css";
import "@radix-ui/themes/styles.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Theme as AntdTheme } from "@/components/antd/Theme";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className}>
      <body>
        <AntdRegistry>
          <AntdTheme>{children}</AntdTheme>
        </AntdRegistry>
      </body>
    </html>
  );
}
