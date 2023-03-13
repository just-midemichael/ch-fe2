import type { FC } from "react";
import Image from "next/image";
import type ImageProps from "./Image.props";

const Img: FC<ImageProps> = ({ className, path, name }) => {
  return (
    <figure className="relative h-full w-full overflow-hidden">
      <Image src={path} className={`${className}`} fill={true} alt={name} />
    </figure>
  );
};

export default Img;
