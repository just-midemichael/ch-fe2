import type { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import type ButtonProps from "./Button.props";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={`${styles.base} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
