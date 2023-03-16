export default interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  path: string;
  name: string;
}
