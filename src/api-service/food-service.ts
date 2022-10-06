import { ApiConfig } from "../config/api-config";
import { ProductJsonMapper } from "../model/product-json-mapper";
import { JsonRespValidator } from "../validation/json-resp-validator";
import { IFoodService } from "./ifood-service";

export class FoodService implements IFoodService {
  private readonly productJsonMapper: ProductJsonMapper;
  private readonly jsonRespValidator: JsonRespValidator;

  constructor(
    productJsonMapper: ProductJsonMapper,
    jsonRespValidator: JsonRespValidator
  ) {
    this.productJsonMapper = productJsonMapper;
    this.jsonRespValidator = jsonRespValidator;
  }

  public async getProductByCode(code: string) {
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

    const validation = this.jsonRespValidator.validate(jsonResp);

    return validation.length == 0
      ? this.productJsonMapper.toProduct(jsonResp)
      : validation;
  }
}
