import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import type { FC, PropsWithChildren } from "react";
import styles from "./Main.module.scss";
import type MainProps from "./Main.props";

const Main: FC<PropsWithChildren<MainProps>> = ({ children, subscription }) => {
  return (
    <>
      <Navbar />
      <main className={styles.base}>{children}</main>;
      <Footer subscription={subscription} />
    </>
  );
};

export default Main;
