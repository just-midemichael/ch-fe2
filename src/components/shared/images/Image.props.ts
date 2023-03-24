import type { StaticImageData } from "next/image";

export default interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  path: string | StaticImageData;
  name: string;
}
