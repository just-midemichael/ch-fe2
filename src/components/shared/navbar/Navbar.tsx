import Bar from "@/assets/icons/bar";
import match from "@/utils/match";
import type { FC } from "react";
import { useEffect, useState } from "react";

import Img from "../images/Image";
import styles from "./Navbar.module.scss";
import type NavbarProps from "./Navbar.props";

const Navbar: FC<NavbarProps> = ({ theme = "light", defaultTransparent }) => {
  const navbarItems = ["Hotels"];
  const [scrollPosition, setScrollPosition] = useState(0);

  const themeVariant = match(theme, {
    light: styles.theme__light,
    dark: styles.theme__dark,
    default: ""
  });

  useEffect(() => {
    // window.onscroll(() => setScrollPosition(window.scrollY));
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));

    return () => {};
  }, []);

  return (
    <nav
      className={`${styles.base} ${themeVariant}  ${
        defaultTransparent && scrollPosition <= 200
          ? "bg-transparent"
          : "border-b border-b-[#dddddd] bg-white"
      }`}
    >
      <div className="flex items-center md:gap-4 lg:gap-6">
        <Img path="/logo.png" name="logo" className="h-[90px] w-[90px]" />
        <div className="flex md:gap-4 lg:gap-8">
          {navbarItems.map((item, index) => (
            <span
              className={
                theme === "dark" ||
                (defaultTransparent && scrollPosition <= 200)
                  ? "text-white"
                  : "text-black"
              }
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`flex items-center gap-3 font-poppins ${
          theme === "light" ? "text-primary400" : "white"
        }`}
      >
        <span>Login</span>
        <span>{Bar}</span>
        <span>Register</span>
      </div>
    </nav>
  );
};

export default Navbar;
