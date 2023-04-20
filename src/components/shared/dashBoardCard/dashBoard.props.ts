export default interface DashBoardCardProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  title?: string;
  record?: string;
  home?: boolean;
  search?: boolean;
}
