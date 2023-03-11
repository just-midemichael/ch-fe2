const match = (
  option: string,
  options: {
    default: string;
    [key: string]: string | undefined;
  }
) => {
  return options[option] || options.default;
};

export default match;
