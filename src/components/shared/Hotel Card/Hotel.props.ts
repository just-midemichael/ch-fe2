export default interface HotelProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className: string;
  featured: Boolean;
  info: Boolean;
  favourite: Boolean;
}
