import { cn } from "@/utils";
import Image from "next/image";
import type { FC } from "react";

interface ICardProps {
  img?: string;
  title?: string;
  subtitle?: string | string[];
  text?: string[];
  className?: string;
}

export const Card: FC<ICardProps> = ({
  img,
  title,
  subtitle,
  text,
  className,
}) => (
  <div
    className={cn(
      "py-[30px] px-[19px] w-full flex flex-col gap-[15px] items-center text-center bg-gradient-card shadow-wrapper rounded-[20px]",
      className
    )}
  >
    {img && (
      <Image src={img} width={178} height={145} alt="image" className="" />
    )}
    {title && (
      <span
        className="font-medium text-[28px] leading-alternate"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    )}
    <div>
      {subtitle && Array.isArray(subtitle) ? (
        subtitle.map((paragraph, i) => (
          <p key={i} className="text-2xl leading-main">
            {paragraph}
          </p>
        ))
      ) : (
        <p className="text-2xl leading-main">{subtitle}</p>
      )}
    </div>
    {text &&
      text.map((paragraph, i) => (
        <p key={i} className="leading-[24.52px] block">
          {paragraph}
        </p>
      ))}
  </div>
);
