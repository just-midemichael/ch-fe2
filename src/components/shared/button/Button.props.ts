export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg" | "subscribe" | "media";
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "danger-outline" | "neutral" | "media";
  outline?: Boolean;
}
