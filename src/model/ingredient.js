const Ingredient = (
  name,
  percentEstimate,
  percentMax,
  percentMin,
  vegan,
  vegeterian
) => {
  const getName = () => name;
  const getPercentEstimate = () => percentEstimate;
  const getPercentMax = () => percentMax;
  const getPercentMin = () => percentMin;
  const isVegan = () => vegan;
  const isVegeterian = () => vegeterian;

  return {
    getName,
    getPercentEstimate,
    getPercentMax,
    getPercentMin,
    isVegan,
    isVegeterian,
  };
};

export { Ingredient };
