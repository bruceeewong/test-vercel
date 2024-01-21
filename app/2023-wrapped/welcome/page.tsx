import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export type WelcomePageProps = {};

export const metadata: Metadata = {
  title: "Welcome",
};

export default function WelcomePage(props: WelcomePageProps) {
  return (
    <main className={"flex flex-col flex-1 justify-center items-center px-4"}>
      <Image
        className={"absolute z-[-1]"}
        src={"/img/2023-wrapped-welcome-bg.png"}
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
        <h1 className={clsx("gradient-blue", "text-5xl font-bold text-center")}>
          Suiet Wallet
          <br />
          2023 Wrapped
        </h1>
        <p className={"max-w-[493px] text-gray-cool-400"}>
          Say hello to your Suiet wallet for 2023. Find out you kept joining in
          crypto world during the year, and what your activities were.
        </p>
      </section>
      <Button className={"px-4 mt-12"}>
        <Link
          href={"/2023-wrapped/review-txn"}
          className={
            "gradient-blue flex justify-center items-center text-md gap-1 font-semibold"
          }
        >
          Connect Suiet
          <Icon name={"arrow-left-gradient-blue"} size={16} />
        </Link>
      </Button>
    </main>
  );
}
