// These styles apply to every route in the application
import "./global.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
