import type { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import type ButtonProps from "./Button.props";
import match from "../../../utils/match";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = "",
  color = "primary",
  children,
  className,
  ...rest
}) => {
  const buttonSize = match(size, {
    sm: styles.size__small,
    md: styles.size__md,
    lg: styles.size__lg,
    subscribe: styles.size__subscribe,
    media: styles.size__media,
    default: ""
  });

  const variant = match(color, {
    primary: styles.variants__primary,
    secondary: styles.variants__secondary,
    neutral: styles.variants__neutral,
    danger: styles.variants__danger,
    media: styles.variants__media,
    default: ""
  });

  return (
    <button
      aria-label={rest.title}
      className={`${className} 
      ${buttonSize}
      ${variant}
    
    `}
      {...rest}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
