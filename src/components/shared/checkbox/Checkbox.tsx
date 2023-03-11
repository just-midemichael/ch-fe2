import type CheckboxProps from "./Checkbox.props";
import styles from "./Checkbox.module.scss";

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = ({
    target: { checked: isChecked }
  }: React.ChangeEvent<HTMLInputElement>) => {
    onChange(isChecked);
  };

  return (
    <div className={styles.check}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
