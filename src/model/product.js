const Product = function (
  code,
  name,
  imgUrl,
  nutritionImgUrl,
  nutriGrade,
  novaGroup,
  ecoScoreGrade,
  ingredients,
  brand,
  servingSize,
  packaging
) {
  const getCode = () => code;
  const getName = () => name;
  const getImgUrl = () => imgUrl;
  const getNutritionImgUrl = () => nutritionImgUrl;
  const getNutriGrade = () => nutriGrade;
  const getNovaGroup = () => novaGroup;
  const getEcoScoreGrade = () => ecoScoreGrade;
  const getIngredients = () => ingredients;
  const getBrand = () => brand;
  const getServingSize = () => servingSize;
  const getPackaging = () => packaging;

  return {
    getCode,
    getName,
    getImgUrl,
    getNutritionImgUrl,
    getNutriGrade,
    getNovaGroup,
    getEcoScoreGrade,
    getIngredients,
    getBrand,
    getServingSize,
    getPackaging,
  };
};

export { Product };
