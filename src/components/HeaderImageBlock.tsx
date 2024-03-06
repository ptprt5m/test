import Image from "next/image";

export const HeaderImageBlock = () => (
  <div className="relative">
    <Image
      src="/Vector 47.png"
      width={1039}
      height={500}
      alt="vector"
      className="absolute top-0 left-[610px]"
    />
    <Image
      src="/Vector 46.png"
      width={939}
      height={500}
      alt="vector"
      className="absolute top-0 left-[534px]"
    />

    <Image
      src="/Vector 45.png"
      width={1247}
      height={500}
      alt="vector"
      className="absolute top-0"
    />
  </div>
);
