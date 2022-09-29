import { ApiConfig } from "../config/api-config";

const FoodService = (productJsonMapper, jsonRespValidator) => {
  const getProductByCode = async (code) => {
    const url =
      ApiConfig.getBaseEndPoint() + ApiConfig.getReadEndPoint() + code;

    const jsonResp = await $.ajax({
      url: url,
      dataType: "json",
    })
      .done((response) => {
        return response;
      })
      .catch((err) => console.log(err));

    const validation = jsonRespValidator.validate(jsonResp);

    return validation.length == 0
      ? productJsonMapper.toProduct(jsonResp)
      : validation;
  };

  return { getProductByCode };
};

export { FoodService };
