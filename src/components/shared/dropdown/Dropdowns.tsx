import { FaChevronDown } from "react-icons/fa";
import styles from "./Dropdown.module.scss";
import type { DropdownProps } from "./Dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  dropdownValue,
  onChange,
  required
}) => {
  return (
    <div className={styles.select__wrapper}>
      <select
        className={styles.select}
        value={dropdownValue}
        onChange={onChange}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles.select__caret}>
        <FaChevronDown className="w-4" />
      </div>
    </div>
  );
};

export default Dropdown;
