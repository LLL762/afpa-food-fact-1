import { ApiConfig } from "../config/api-config";

const FoodService = (productJsonMapper) => {
  const getProductByCode = async (code) => {
    const url =
      ApiConfig.getBaseEndPoint() + ApiConfig.getReadEndPoint() + code;

    const jsonResp = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));

    return productJsonMapper.toProduct(jsonResp);
  };

  return { getProductByCode };
};

export { FoodService };
