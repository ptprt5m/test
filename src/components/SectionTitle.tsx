import Image from "next/image";
import type { FC } from "react";

interface ISectionTitleProps {
  title?: string;
}

export const SectionTitle: FC<ISectionTitleProps> = ({ title }) => (
  <div className="relative">
    <Image
      src="/Vector 48.png"
      width={1335}
      height={110}
      alt="vector"
      className="absolute top-0 w-full max-w-[1135px]"
    />
    <h1 className="font-title text-[40px] font-bold pt-[18px] p-[45px] leading-[50px] z-10 relative">
      {title ?? "Заголовок"}
    </h1>
  </div>
);
