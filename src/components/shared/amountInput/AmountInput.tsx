import { Label } from "../headings/Headings";
import styles from "./AmountInput.module.scss";
import type AmountInputProps from "./AmountInput.props";

const AmountInput: React.FC<AmountInputProps> = ({
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
