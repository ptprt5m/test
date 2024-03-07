import { SectionTitle, Card } from "@/components";
import { QUOTE, THERAPY } from "@/constants";

import Image from "next/image";

export const SecondSection = () => (
  <div className="py-[110px] w-full">
    <SectionTitle title={THERAPY.title} />
    <div className="p-[45px] pb-0 w-full">
      <div className="bg-gradient-custom w-full rounded-[20px]">
        <p className="font-bold text-[28px] text-center p-[22.5px] leading-alternate">
          {QUOTE}
        </p>
      </div>
      <div className="pt-10 ">
        <span className="text-2xl font-bold text-center block pb-[50px]">
          {THERAPY.priorityAreas.title}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-[30px]">
          {THERAPY.priorityAreas.items.map(
            (item) =>
              item.id < 3 && (
                <Card
                  key={item.id}
                  img={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              )
          )}
        </div>
        <div className="flex w-full gap-[30px] justify-center pb-[22px]">
          <Image src="/arrow.png" width={425} height={54} alt="arrow" className="hidden md:flex" />
          <Image src="/arrow.png" width={425} height={54} alt="arrow" />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-[30px]">
          {THERAPY.priorityAreas.items.map(
            (item) =>
              item.id > 2 && (
                <Card
                  key={item.id}
                  img={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  className="text-start px-[40px]"
                />
              )
          )}
        </div>
      </div>
    </div>
  </div>
);
