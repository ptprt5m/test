import {
  ModalBlock,
  SectionTitle,
  HeaderImageBlock,
  Card,
  CardAlternative,
} from "@/components";
import { COPDBlock, QUOTE, THERAPY } from "@/constants";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-full text-blue bg-gradient-background">
      <HeaderImageBlock />
      <div className="max-w-screen-wrapper w-full m-auto shadow-wrapper bg-white mt-[141px] mb-[117px]">
        <div>
          <SectionTitle title={COPDBlock.title} />
          <div className="p-[45px] pb-0 pt-[35px]">
            <div className="py-2.5 flex flex-col gap-10 leading-main">
              <ModalBlock
                key={COPDBlock.items[0].id}
                demo={COPDBlock.items[0].demo}
                title={COPDBlock.items[0].title}
                text={COPDBlock.items[0].text}
                img={COPDBlock.items[0].icon}
                openLinkColor={COPDBlock.items[0].openLinkColor}
              >
                <Image
                  src={COPDBlock.items[0].image as string}
                  width={1211}
                  height={389}
                  alt="graphic"
                />
              </ModalBlock>
              <ModalBlock
                key={COPDBlock.items[1].id}
                demo={COPDBlock.items[1].demo}
                title={COPDBlock.items[1].title}
                text={COPDBlock.items[1].text}
                img={COPDBlock.items[1].icon}
                openLinkColor={COPDBlock.items[1].openLinkColor}
              >
                <div className="text-center flex flex-col gap-10">
                  <span className="font-bold text-[30px] leading-[40.86px]">
                    {COPDBlock.items[1].cards?.title}
                  </span>
                  <div className="flex gap-[54px] justify-between">
                    {COPDBlock.items[1].cards?.items.map((item) => (
                      <CardAlternative
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        img={item.icon}
                        text={item.text}
                        iconHeight={item.imgHeight}
                        iconWidth={item.imgWidth}
                      />
                    ))}
                  </div>
                </div>
              </ModalBlock>
            </div>
          </div>
        </div>
        <div className="py-[110px]">
          <SectionTitle title={THERAPY.title} />
          <div className="p-[45px] pb-0">
            <div className="bg-gradient-custom w-full rounded-[20px]">
              <p className="font-bold text-[28px] text-center py-[22.5px] leading-alternate">
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
              <div className="flex w-full gap-[30px] justify-center pb-[22px]">
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
                        className="text-start px-[40px]"
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
