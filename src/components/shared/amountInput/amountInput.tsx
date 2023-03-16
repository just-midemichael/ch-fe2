import { Label } from "../font headers/Fonts";
import styles from "./amountInput.module.scss";
import type InputProps from "./amountInput.props";

const AmountInput: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  ...rest
}) => {
  return (
    <div>
      <Label htmlFor={name} className="py-3">
        {label}
      </Label>
      <div className={styles.input_wrapper}>
        <span className={styles.input_prepend}></span>
        <input
          className={styles.inputs_no_border}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default AmountInput;
