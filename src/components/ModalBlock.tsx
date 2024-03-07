"use client";

import Image from "next/image";
import { useState, type FC, type ReactNode, useEffect } from "react";

interface IModalBlockProps {
  img?: string;
  title?: string;
  demo?: string;
  text?: string | string[];
  openLinkColor?: string;
  children?: ReactNode;
}

export const ModalBlock: FC<IModalBlockProps> = ({
  img,
  title,
  demo,
  text,
  openLinkColor = "#000",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex relative border border-blue shadow-wrapper rounded-[20px] p-10">
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-20 w-screen h-screen bg-black/[.5] backdrop-blur flex items-center justify-center"
          onClick={toggleModal}
        >
          <div className="max-w-[1290px] w-full m-5 bg-white shadow-wrapper rounded-[20px] p-10 text-2xl flex flex-col gap-10 overflow-auto max-h-screen">
            <div className="flex flex-col gap-[9px]">
              {Array.isArray(text)
                ? text.map((paragraph, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))
                : text}
            </div>
            {children}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-7">
        <div className="rounded-full rounded-tl-none w-20 h-20 flex items-center justify-center bg-gradient-custom">
          {img && (
            <Image src={img} width={45} height={45} alt="modal block icon" />
          )}
        </div>
        <div className="w-full max-w-[295px] h-[115px] py-2 bg-[url('/Vector-50.png')] bg-contain bg-no-repeat bg-center">
          <span
            className="w-full max-w-[248px] text-xl md:text-2xl"
            dangerouslySetInnerHTML={{ __html: title as string }}
          />
        </div>
        <div className="flex flex-col w-full max-w-[747px] text-2xl font-normal relative">
          <p>{demo}</p>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>

      <button
        style={{ backgroundColor: openLinkColor }}
        className="rounded-full w-12 h-12 flex items-center justify-center absolute -top-5 -right-5 hover:scale-105 transition"
        onClick={toggleModal}
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
