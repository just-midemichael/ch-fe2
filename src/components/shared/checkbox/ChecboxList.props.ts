export default interface CheckboxListProps {
  options: { label: string; value: string }[];
  selectedOptions: { [key: string]: boolean };
  onChange: (selectedOptions: { [key: string]: boolean }) => void;
}
