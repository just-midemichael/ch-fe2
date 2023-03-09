import type { FC, PropsWithChildren } from "react";
// import styles from "./Button.module.scss";
import type ButtonProps from "./Button.props";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      aria-label={rest.title}
      className={`${className} 
    ${
      rest.size! === "sm"
        ? "min-w-[93px] rounded-lg py-[6px] px-[16px] leading-[20px]"
        : ""
    }
    ${
      rest.size! === "md"
        ? "min-w-[106px] rounded-lg py-[9.5px] px-[23px] leading-[21px]"
        : ""
    }
    ${
      rest.size! === "lg"
        ? "min-w-[136px] rounded-lg py-[12px] px-[26px] leading-[24px]"
        : ""
    }
    ${rest.size! === "media" ? "min-w-[50px] hover:rounded-[100%]" : ""}
    ${
      rest.size! === "subscribe"
        ? "min-w-[136px] rounded-3xl py-[12px] px-[26px] leading-[25px]"
        : ""
    }
    ${
      rest.color! === "primary"
        ? "hover:bg-primary700 active:bg-primary800 focus:bg-primary800 bg-[#FE8501] text-white"
        : ""
    }
    ${
      rest.color! === "secondary"
        ? "hover:bg-primary700 active:bg-primary800 focus:bg-primary800 bg-[#0D1C39] text-white"
        : ""
    }
    ${
      rest.color! === "neutral"
        ? "focus:bg-primary800 border-2 border-[#212AEE] bg-[#FFF] text-[#212AEE] hover:bg-[#212AEE] hover:text-[#FFF] active:bg-[#212AEE]"
        : ""
    }
    ${
      rest.color! === "danger-outline"
        ? "focus:bg-primary800 border-2 border-[#D93025] bg-[#FFF] text-[#D93025] hover:bg-[#D93025] hover:text-[#FFF] active:bg-[#D93025]"
        : ""
    }
    ${
      rest.color! === "media"
        ? "text-black hover:bg-[#FE8501] hover:text-white"
        : ""
    }
    `}
      {...rest}
    >
      <div
        className={`flex h-full w-full ${rest.size === "lg" && "gap-3"} ${
          rest.size === "md" && "gap-2"
        } ${rest.size === "sm" && "gap-1"} items-center justify-center`}
      >
        <>{children}</>
      </div>
    </button>
  );
};

export default Button;
