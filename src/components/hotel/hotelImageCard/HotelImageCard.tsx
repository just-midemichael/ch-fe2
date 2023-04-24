import type { FC } from "react";
import Img from "@/components/shared/images/Image";
import type HotelImageCardProps from "./HotelImageCard.props";
import styles from "./HotelImageCard.module.scss";

const HotelImageCard: FC<HotelImageCardProps> = ({
  className,
  path,
  onClick
}) => {
  return (
    <div className={`relative ${styles.base}  ${className}`} onClick={onClick}>
      <Img
        id="pic"
        path={path}
        name="hotel Image"
        className={`${styles.base} ${styles.skeleton} ${className}`}
      />
    </div>
  );
};

export default HotelImageCard;
