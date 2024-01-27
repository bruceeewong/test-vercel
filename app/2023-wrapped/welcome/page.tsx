import { Metadata, NextPage } from "next";
import Image from "next/image";
import clsx from "clsx";
import { CustomConnectButton } from "@/components/buttons/CustomConnectButton";

export type WelcomePageProps = NextPage & {};

export const metadata: Metadata = {
  title: "Welcome",
};

export default function WelcomePage(props: WelcomePageProps) {
  return (
    <main
      className={clsx(
        "flex flex-col flex-1 justify-center items-center px-12",
        "md:px-4",
      )}
    >
      <Image
        className={"absolute z-[-1]"}
        src={"/img/wrap23-welcome-bg.png"}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        alt={"bg"}
      />
      <section className={"flex flex-col items-center gap-6"}>
        <Image
          src={"/img/suiet-logo.svg"}
          width={88}
          height={88}
          alt={"suiet-logo"}
        />
        <h1
          className={clsx(
            "gradient-blue",
            "text-center text-4xl font-bold ",
            "md:text-5xl",
          )}
        >
          Suiet Wallet
          <br />
          2023 Wrapped
        </h1>
        <p className={clsx("text-gray-cool-400", "md:max-w-[493px]")}>
          Say hello to your Suiet wallet for 2023. Find out you kept joining in
          crypto world during the year, and what your activities were.
        </p>
      </section>
      <CustomConnectButton className={"mt-12"} {...props} />
    </main>
  );
}
