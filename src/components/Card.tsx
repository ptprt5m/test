import Image from "next/image";
import type { FC } from "react";

interface ICardProps {
  img?: string;
  title?: string;
  subtitle?: string | string[];
}

export const Card: FC<ICardProps> = ({ img, title, subtitle }) => (
  <div className="py-[30px] px-[19px] w-full flex flex-col gap-[15px] items-center text-center bg-gradient-card shadow-wrapper rounded-[20px]">
    {img && (
      <Image src={img} width={178} height={145} alt="image" className="" />
    )}
    {title && <span className="font-bold text-[28px]">{title}</span>}
    {subtitle && <p className="text-2xl">{subtitle}</p>}
  </div>
);
