export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  rightComponent?: React.ReactNode;
  borderRadius?: string;
}
