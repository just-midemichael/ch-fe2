export default interface ButtonProps
  extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
}
