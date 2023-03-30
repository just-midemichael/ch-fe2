import React from "react";
import styles from "./HorizontalScroll.module.scss";

const ScrollPagination: React.FC<{
  position: number;
  isActive: boolean;
  scrollTo: Function;
}> = ({ position, isActive, scrollTo }) => {
  return (
    <button onClick={() => scrollTo(position)}>
      <span
        className={`${styles.indicator}
        ${isActive && styles.active}`}
      />
    </button>
  );
};

export default ScrollPagination;
