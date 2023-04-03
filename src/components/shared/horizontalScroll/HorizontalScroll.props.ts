export default interface HorizontalScrollProps {
  label?: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  showNavigation?: boolean;
  showPagination?: boolean;
}
