import {
  ModalBlock,
  SectionTitle,
  CardAlternative,
} from "@/components";
import { COPDBlock } from "@/constants";

import Image from "next/image";

export const FirstSection = () => (
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
            <div className="flex flex-col md:flex-row gap-[54px] justify-between">
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
);
