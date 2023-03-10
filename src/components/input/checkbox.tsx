import { useState } from "react";
import styles from "./inputs.module.scss";

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
};

const Checkbox = ({ label, isChecked, onChange }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <label>
      <div className={styles.check}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={handleOnChange}
        />
        {label}
      </div>
    </label>
  );
};

export default Checkbox;
