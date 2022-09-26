const Product = (_code, _name) => {
  const code = _code;
  const name = _name;

  const getCode = () => code;
  const getName = () => name;

  return { getCode, getName };
};

export { Product };
