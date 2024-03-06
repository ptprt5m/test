import { ModalBlock, SectionTitle, HeaderImageBlock, Card } from "@/components";
import { COPDBlock, QUOTE, THERAPY } from "@/constants";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-full text-blue bg-gradient-background">
      <HeaderImageBlock />
      <div className="max-w-screen-wrapper w-full m-auto shadow-wrapper bg-white mt-[141px] mb-[117px]">
        <div>
          <SectionTitle title={COPDBlock.title} />
          <div className="p-[45px] pb-0">
            <div className="py-2.5 flex flex-col gap-10">
              {COPDBlock.items.map((item) => (
                <ModalBlock
                  title={item.title}
                  text={item.text}
                  img={item.icon}
                  openLinkColor={item.openLinkColor}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-24 pb-[93px]">
          <SectionTitle title={THERAPY.title} />
          <div className="p-[45px] pb-0">
            <div className="bg-gradient-custom w-full rounded-[20px]">
              <p className="font-bold text-[28px] text-center py-[22.5px]">
                {QUOTE}
              </p>
            </div>
            <div className="pt-10 ">
              <span className="text-2xl font-bold text-center block pb-[50px]">
                {THERAPY.priorityAreas.title}
              </span>
              <div className="grid grid-cols-3 w-full gap-[30px]">
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
              <div className="flex w-full gap-[30px] justify-center">
                <Image src="/arrow.png" width={425} height={54} alt="arrow" />
                <Image src="/arrow.png" width={425} height={54} alt="arrow" />
              </div>
              <div className="flex w-full gap-[30px]">
                {THERAPY.priorityAreas.items.map(
                  (item) =>
                    item.id > 2 && (
                      <Card
                        key={item.id}
                        img={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
