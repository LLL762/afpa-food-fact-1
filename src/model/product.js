const Product = (
  code,
  name,
  imgUrl,
  nutritionImgUrl,
  nutriGrade,
  novaGroup,
  ecoScoreGrade,
  ingredients
) => {
  const getCode = () => code;
  const getName = () => name;
  const getImgUrl = () => imgUrl;
  const getNutritionImgUrl = () => nutritionImgUrl;
  const getNutriGrade = () => nutriGrade;
  const getNovaGroup = () => novaGroup;
  const getEcoScoreGrade = () => ecoScoreGrade;
  const getIngredients = () => ingredients;

  return {
    getCode,
    getName,
    getImgUrl,
    getNutritionImgUrl,
    getNutriGrade,
    getNovaGroup,
    getEcoScoreGrade,
    getIngredients,
  };
};

export { Product };
