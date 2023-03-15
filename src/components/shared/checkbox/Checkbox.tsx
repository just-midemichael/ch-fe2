import type CheckboxProps from "./Checkbox.props";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <div className={styles.check}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={value}
          onChange={onChange}
          name={label}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
