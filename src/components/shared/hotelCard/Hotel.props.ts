export default interface HotelProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  featured?: boolean;
  info?: boolean;
  favourite?: boolean;
  path: string;
}
