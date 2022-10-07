import nutella from "../assets/json/nutella.json";

const FoodServiceMock = (productJsonMapper) => {
  const getProductByCode = async (code) => {
    return productJsonMapper.toProduct(nutella);
  };

  return { getProductByCode };
};

export { FoodServiceMock };
