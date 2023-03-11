import React, { useState } from "react";
import styles from "./inputs.module.scss";

interface CheckboxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = ({
    target: { checked }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(checked);

    if (checked) {
      console.log(`Selected item: ${value}`);
      onChange(value);
    } else {
      console.log(`${value} is unchecked`);
    }
  };

  return (
    <div className={styles.check}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
