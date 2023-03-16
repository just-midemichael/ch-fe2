import type { FC } from "react";
import Image from "next/image";

import styles from "./Image.module.scss";
import type ImageProps from "./Image.props";

const Img: FC<ImageProps> = ({ className, path, name }) => {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image src={path} className={styles.base} fill={true} alt={name} />
    </figure>
  );
};

export default Img;
