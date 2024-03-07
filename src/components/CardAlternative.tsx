import Image from "next/image";
import type { FC } from "react";

interface ICardAlternativeProps {
  img?: string;
  title?: string;
  subtitle?: string | string[];
  text?: string[];
  iconWidth?: number;
  iconHeight?: number;
}

export const CardAlternative: FC<ICardAlternativeProps> = ({
  img,
  title,
  subtitle,
  text,
  iconWidth,
  iconHeight
}) => (
  <div className="py-[30px] px-[19px] w-full flex flex-col gap-[15px] items-center text-center bg-desert shadow-wrapper rounded-[20px]">
    {img && (
      <Image src={img} width={iconWidth ?? 178} height={iconHeight ?? 145} alt="image" />
    )}
    {title && <span className="font-bold text-8xl leading-[130.75px]">{title}</span>}
    {subtitle && <p className="text-[26px] leading-[35.41px]" dangerouslySetInnerHTML={{ __html: subtitle }} />}
    {text &&
      text.map((paragraph, i) => (
        <p key={i} className="text-lg font-light leading-[24.52px]">
          {paragraph}
        </p>
      ))}
  </div>
);
