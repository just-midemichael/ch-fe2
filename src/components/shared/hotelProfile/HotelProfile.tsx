import type { FC } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import Link from "next/link";
import Rating from "@/assets/icons/rating.svg";
import type HotelProf from "./HotelProfile.props";
import Img from "../images/Image";
import { H4, P } from "../headings/Headings";
import styles from "./HotelProfile.module.scss";

const HotelProfile: FC<HotelProf> = () => {
  return (
    <div className="flex items-center gap-8">
      <Img
        path="/profile.png"
        name="hotel profile"
        className={styles.profile}
      />
      <div className="flex h-full flex-col  justify-center gap-4  ">
        <H4 className="px-1 font-black">Rand Royale Hotel</H4>
        <Rating className={styles.ratings} />
        <div className="flex items-baseline gap-2 px-1">
          <P>8/10</P>
          <ul className="list-disc">
            <Link href="/" className="list-disc text-[#0036DA]">
              See all 50 reviews
            </Link>
          </ul>
        </div>

        <div className={styles.icons}>
          <FaFacebookF />

          <AiOutlineTwitter />

          <TfiPinterest />

          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default HotelProfile;
