export default interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}
