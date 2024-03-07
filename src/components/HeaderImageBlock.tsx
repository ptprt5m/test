import Image from "next/image";

export const HeaderImageBlock = () => (
  <div className="relative w-full">
    <Image
      src="/Vector 47.png"
      width={1039}
      height={500}
      alt="vector"
      className="absolute top-0 left-[60px] md:left-[400px] xl:left-[610px] w-min xl:w-full max-w-[300px] md:max-w-[1039px]"
    />
    <Image
      src="/Vector 46.png"
      width={939}
      height={500}
      alt="vector"
      className="absolute top-0 left-[30px] md:left-[300px] xl:left-[534px] w-min xl:w-full max-w-[300px] md:max-w-[939px]"
    />

    <Image
      src="/Vector 45.png"
      width={1247}
      height={500}
      alt="vector"
      className="absolute top-0 w-min xl:w-full max-w-[300px] md:max-w-[1247px]"
    />
  </div>
);
