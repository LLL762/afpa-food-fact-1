const Nutriment = (name, qte100g, qteServed, qteUnit, value) => {
  const getName = () => name;
  const getQte100g = () => qte100g;
  const getQteServed = () => qteServed;
  const getQteUnit = () => qteUnit;
  const getValue = () => value;

  return { getName, getQteServed, getQteUnit, getValue, getQte100g };
};

export { Nutriment };
