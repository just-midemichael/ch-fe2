export const H1: React.FC<JSX.IntrinsicElements["h1"]> = (props) => {
  return (
    <h1
      {...props}
      className={`tracking font-playfair text-[30px] font-bold leading-[50px] tracking-wider text-white lg:text-[50px] ${props.className}`}
    >
      {props.children}
    </h1>
  );
};

export const H2: React.FC<JSX.IntrinsicElements["h2"]> = (props) => {
  return (
    <h2
      {...props}
      className={`font-playfair text-[45px] font-bold leading-[45px] tracking-wider text-black ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export const H3: React.FC<JSX.IntrinsicElements["h3"]> = (props) => {
  return (
    <h3
      {...props}
      className={`font-playfair text-[30px] font-bold leading-[40px] tracking-wide text-black  ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export const H33: React.FC<JSX.IntrinsicElements["h3"]> = (props) => {
  return (
    <h3
      {...props}
      className={`font-playfair text-[20px] font-bold leading-[40px] tracking-wide text-black  ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export const H4: React.FC<JSX.IntrinsicElements["h4"]> = (props) => {
  return (
    <h4
      {...props}
      className={`font-poppins text-[20px] font-medium leading-[35px]  ${props.className}`}
    >
      {props.children}
    </h4>
  );
};

export const H5: React.FC<JSX.IntrinsicElements["h5"]> = (props) => {
  return (
    <h5
      {...props}
      className={`font-poppins text-[13px] font-semibold leading-[22px] text-black ${props.className}`}
    >
      {props.children}
    </h5>
  );
};

export const H6: React.FC<JSX.IntrinsicElements["h6"]> = (props) => {
  return (
    <h6
      {...props}
      className={`font-poppins text-[12px] font-normal leading-[22px] text-gray-400 ${props.className}`}
    >
      {props.children}
    </h6>
  );
};

export const P: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p
      {...props}
      className={`font-poppins text-[14px] leading-[20px] ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export const P2: React.FC<JSX.IntrinsicElements["p"]> = (props) => {
  return (
    <p
      {...props}
      className={`font-poppins text-[12px] leading-[20px] ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export const Label: React.FC<JSX.IntrinsicElements["label"]> = (props) => {
  return (
    <label
      {...props}
      className={`font-poppins text-[15px] leading-[18px] ${props.className}`}
    >
      {props.children}
    </label>
  );
};
