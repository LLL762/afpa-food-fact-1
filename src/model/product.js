const Product = (
  code,
  name,
  imgUrl,
  nutritionImgUrl,
  nutriGrade,
  novaGroup
) => {
  const getCode = () => code;
  const getName = () => name;
  const getImgUrl = () => imgUrl;
  const getNutritionImgUrl = () => nutritionImgUrl;
  const getNutriGrade = () => nutriGrade;
  const getNovaGroup = () => novaGroup;

  return {
    getCode,
    getName,
    getImgUrl,
    getNutritionImgUrl,
    getNutriGrade,
    getNovaGroup,
  };
};

export { Product };
