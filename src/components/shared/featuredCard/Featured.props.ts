export default interface FeaturedProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  featured?: boolean;
  path: string;
  featuredPrice?: string;
  featuredPlace?: string;
  featuredLocation?: string;
  featuredBed?: string;
  featuredBath?: string;
  featuredSize?: string;
}
