import { HeaderImageBlock, FirstSection, SecondSection } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-full text-blue bg-gradient-background box-border">
      <HeaderImageBlock />
      <div className="max-w-screen-wrapper w-full m-auto shadow-wrapper bg-white mt-[141px] mb-[117px]">
        <FirstSection />
        <SecondSection />
      </div>
    </main>
  );
}
