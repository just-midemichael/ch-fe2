export const CityImg: React.FC<JSX.IntrinsicElements['img']> = (props) => {
    return (
      <img 
      {...props}
      className ={`
      object-contain rounded-lg h-40
      ${props.className}`}
      src={`${props.src}`}
      />
    );
};


export const HotelImg: React.FC<JSX.IntrinsicElements['img']> = (props) => {
    return (
      <img 
      {...props}
      className ={`
      object-contain rounded-lg h-48
      ${props.className}`}
      src={`${props.src}`}
      />
    );
};

export const FeaturedImg: React.FC<JSX.IntrinsicElements['img']> = (props) => {
    return (
      <img 
      {...props}
      className ={`
      object-contain rounded-t-lg h-40
      ${props.className}`}
      src={`${props.src}`}
      />
    );
};

export const LogoImg: React.FC<JSX.IntrinsicElements['img']> = (props) => {
    return (
      <img 
      {...props}
      className ={`
      object-contain 
      ${props.className}`}
      src={`${props.src}`}
      />
    );
};