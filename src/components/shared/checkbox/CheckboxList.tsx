import Checkbox from "./Checkbox";
import type CheckboxListProps from "./ChecboxList.props";

const CheckboxList: React.FC<CheckboxListProps> = ({
  options,
  selectedOptions,
  onChange
}) => {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    onChange({ ...selectedOptions, [value]: checked });
  };

  return (
    <div>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          checked={selectedOptions[option.value]}
          onChange={(checked) => handleCheckboxChange(option.value, checked)}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
