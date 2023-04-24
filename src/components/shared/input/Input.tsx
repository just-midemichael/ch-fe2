import { useState } from "react";
import EyeOpenIcon from "@/assets/icons/eye-open.svg";
import EyeOffIcon from "@/assets/icons/eye-off.svg";
import styles from "./Input.module.scss";
import type InputProps from "./Input.props";

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  className,
  rightComponent,
  ...rest
}) => {
  const [mode, setMode] = useState("password");

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name}>
          <div className="pb-4">{label}</div>
        </label>
      )}

      {type === "password" ? (
        <div className={`relative ${styles.input_container} ${className}`}>
          <input
            className={`${styles.input}`}
            type={mode}
            id={name}
            name={name}
            placeholder={placeholder}
            {...rest}
          />
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2">
            {mode === "password" ? (
              <EyeOpenIcon onClick={() => setMode("text")} />
            ) : (
              <EyeOffIcon onClick={() => setMode("password")} />
            )}
          </div>
        </div>
      ) : (
        <div className={`${styles.input_container} ${className}`}>
          <input
            className={`${styles.input}`}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            {...rest}
          />
          {rightComponent && rightComponent}
        </div>
      )}
    </div>
  );
};

export default Input;
