import type BannerProps from "./Banner.props";
import { H1 } from "../headings/Headings";
import Img from "../images/Image";
import styles from "./Banner.module.scss";

const RoomBanner: React.FC<BannerProps> = ({ path }) => {
  return (
    <div className={`${styles.roomBase}`}>
      <Img path={`${path}`} name="banner" className="h-full w-full" />
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-[942px] flex-col text-center align-middle">
          <H1 className="mb-4">Hotel Name</H1>
        </div>
      </div>
    </div>
  );
};

export default RoomBanner;
