import { AiOutlineSearch } from "react-icons/ai";
import { Label } from "../font headers/Fonts";
import styles from "./searchInput.module.scss";
import type searchInputProps from "./searchInput.props";

const SearchInput: React.FC<searchInputProps> = ({
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
        <div className={styles.input_prepend}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.search}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default SearchInput;
