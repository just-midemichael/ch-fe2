import { HiOutlineMailOpen } from "react-icons/hi";
import type { FC } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import Bar from "@/assets/icons/bar";
import { BiCopyright } from "react-icons/bi";
import Button from "../button/Button";
import { P } from "../headings/Headings";
import Img from "../images/Image";
import Input from "../input/Input";
import styles from "./Footer.module.scss";
import type FooterProps from "./Footer.props";

const Footer: FC<FooterProps> = ({ subscription = true }) => {
  return (
    <footer>
      {subscription && (
        <div className={styles.socials}>
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <HiOutlineMailOpen className="text-[4rem] text-primary400" />
            <div>
              <P className="text-white">Subscribe our Newletter</P>
              <P className="text-grey60">
                Pellentesque eu nibh eget mauris congue mattis matti.
              </P>
            </div>
          </div>

          <div className="my-5 items-center md:gap-8 lg:flex lg:gap-16">
            <Input
              className="rounded-[46px] border-none bg-grey70 text-white"
              placeholder="Your email address"
              rightComponent={
                <Button
                  color="primary"
                  className="w-max rounded-[46px] px-4 lg:px-8"
                >
                  Subscribe
                </Button>
              }
            />
          </div>

          <div className="mt-5 flex  items-center justify-center gap-2">
            <span className={styles.social_icons_container}>
              <FaFacebookF className={styles.social_icons} />
            </span>

            <span className={styles.social_icons_container}>
              <AiOutlineTwitter className={styles.social_icons} />
            </span>

            <span className={styles.social_icons_container}>
              <TfiPinterest className={styles.social_icons} />
            </span>

            <span className={styles.social_icons_container}>
              <AiOutlineInstagram className={styles.social_icons} />
            </span>
          </div>
        </div>
      )}

      <div className={styles.terms}>
        <div className="mx-auto w-max">
          <Img
            path="/logo.png"
            name="logo"
            className="mx-auto h-[72px] w-[72px]"
          />
          <P className="text-[14px] text-white">CityHotels & Bookings</P>
        </div>
        <div className="mt-5 items-center justify-between border-t border-grey90  pt-5 text-[14px] text-white md:flex">
          <div className="my-5 flex items-center justify-center gap-1">
            Copyright <BiCopyright /> 2023
          </div>
          <div className="flex items-center justify-center  gap-1 text-[12px]">
            <span>All Rights Reserved</span>
            <span>{Bar}</span>
            <span className="cursor-pointer  text-[12px] text-primary400 underline">
              Terms and Conditions
            </span>
            <span>{Bar}</span>
            <span className="cursor-pointer text-[12px] text-primary400 underline">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
