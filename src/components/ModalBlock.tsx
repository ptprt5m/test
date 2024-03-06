"use client";

import Image from "next/image";
import type { FC } from "react";

interface IModalBlockProps {
  img?: string;
  title?: string;
  text?: string | string[];
  openLinkColor?: string;
}

export const ModalBlock: FC<IModalBlockProps> = ({
  img,
  title,
  text,
  openLinkColor = "#000",
}) => {
  const openModal = () => {
    console.log("click");
  };
  return (
    <div className="flex relative border border-blue shadow-wrapper rounded-[20px] p-10 gap-7 justify-between">
      <div className="rounded-full rounded-tl-none w-20 h-20 flex items-center justify-center bg-gradient-custom">
        {img && (
          <Image src={img} width={45} height={45} alt="modal block icon" />
        )}
      </div>
      <div className="w-full max-w-[295px] h-[115px] py-2 bg-[url('/Vector-50.png')]">
        <span className="w-full max-w-[248px] text-2xl font-bold">{title}</span>
      </div>
      <div className="flex flex-col w-full max-w-[747px] text-2xl font-normal relative">
        {Array.isArray(text) ? (
          <p className="line-clamp-3">
            {text.map((paragraph, i) => (
              <span key={i} className="block">
                {paragraph}
              </span>
            ))}
          </p>
        ) : (
          <p>{text}</p>
        )}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <button
        style={{ backgroundColor: openLinkColor }}
        className="rounded-full w-12 h-12 flex items-center justify-center absolute -top-5 -right-5 hover:scale-105 transition"
        onClick={openModal}
      >
        <Image
          src="/hand-icon.png"
          width={23}
          height={26}
          alt="open the modal"
        />
      </button>
    </div>
  );
};
