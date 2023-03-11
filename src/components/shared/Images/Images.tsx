export const CityImg: React.FC<JSX.IntrinsicElements["img"]> = (props) => {
  return (
    <img
      {...props}
      className={`
      h-40 rounded-lg object-contain
      ${props.className}`}
      src={`${props.src}`}
      alt={`${props.alt}`}
    />
  );
};

export const HotelImg: React.FC<JSX.IntrinsicElements["img"]> = (props) => {
  return (
    <img
      {...props}
      className={`
      h-48 rounded-lg object-contain
      ${props.className}`}
      src={`${props.src}`}
      alt={`${props.alt}`}
    />
  );
};

export const FeaturedImg: React.FC<JSX.IntrinsicElements["img"]> = (props) => {
  return (
    <img
      {...props}
      className={`
      h-40 rounded-t-lg object-contain
      ${props.className}`}
      src={`${props.src}`}
      alt={`${props.alt}`}
    />
  );
};

export const LogoImg: React.FC<JSX.IntrinsicElements["img"]> = (props) => {
  return (
    <img
      {...props}
      className={`
      object-contain 
      ${props.className}`}
      src={`${props.src}`}
      alt={`${props.alt}`}
    />
  );
};
