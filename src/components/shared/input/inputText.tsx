import styles from "./input.module.scss";
import type InputProps from "./input.props";

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
        className={styles.inputs}
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
