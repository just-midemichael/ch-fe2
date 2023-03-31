export default interface HotelItem
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  featured?: boolean;
  path: string;
}
