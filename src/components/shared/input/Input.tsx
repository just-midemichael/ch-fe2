import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./Input.module.scss";
import type InputProps from "./Input.props";
import x from "./X";

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  ...rest
}) => {
  const [mode, setMode] = useState("password");
  console.log(x);
  return (
    <div className="relative">
      <label htmlFor={name}>
        <div className="py-4">{label}</div>
      </label>
      {type === "password" ? (
        <div className="relative">
          <input
            className={`${styles.inputs}`}
            type={mode}
            id={name}
            name={name}
            placeholder={placeholder}
            {...rest}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {mode === "password" ? (
              <AiFillEyeInvisible onClick={() => setMode("text")} />
            ) : (
              <AiFillEye onClick={() => setMode("password")} />
            )}
          </div>
        </div>
      ) : (
        <input
          className={`${styles.inputs}`}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
