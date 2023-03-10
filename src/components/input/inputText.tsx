import React, { InputHTMLAttributes } from "react";
import styles from "./inputs.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
}

const InputText: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <div className="py-4">{label}</div>
      </label>
      <input
        className={styles.put}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default InputText;
