const NutrientLevels = (
  fatLevel,
  saltLevel,
  saturatedFatLevel,
  sugarsLevel
) => {
  const getFatLevel = () => fatLevel;
  const getSaltLevel = () => saltLevel;
  const getSaturatedFatLevel = () => saturatedFatLevel;
  const getSugarsLevel = () => sugarsLevel;

  return {
    getFatLevel,
    getSaltLevel,
    getSaturatedFatLevel,
    getSugarsLevel,
  };
};

const NutrientValues = (() => {
  const LOW = "low";
  const AVERAGE = "moderate";
  const HIGH = "high";

  const getLow = () => LOW;
  const getHigh = () => HIGH;
  const getAverage = () => AVERAGE;

  return { getLow, getHigh, getAverage };
})();

export { NutrientLevels, NutrientValues };
