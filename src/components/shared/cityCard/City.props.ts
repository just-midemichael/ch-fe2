export default interface CityProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  path: string;
  state: string;
  country: string;
}
