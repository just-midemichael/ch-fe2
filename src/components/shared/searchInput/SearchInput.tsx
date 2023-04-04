import SearchIcon from "@/assets/icons/search.svg";
import { Label } from "../headings/Headings";
import styles from "./SearchInput.module.scss";
import type SearchInputProps from "./SearchInput.props";

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  name,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <div className={styles.input_wrapper}>
        <div className={styles.input_prepend}>
          <SearchIcon />
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
