import Footer from "@/components/shared/footer/Footer";
import type { FC, PropsWithChildren } from "react";
import React from "react";
import styles from "./Main.module.scss";
import type MainProps from "./Main.props";

const Main: FC<PropsWithChildren<MainProps>> = ({ children, subscription }) => {
  return (
    <>
      <main className={styles.base}>{children}</main>
      <Footer subscription={subscription} />
    </>
  );
};

export default Main;
