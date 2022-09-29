import { EcoMapper } from "./eco-grade-img-mapper";
import { NovaMapper } from "./nova-score-img-mapper";
import { NutrigradeImgMapper } from "./nutrigrade-img-mapper";
import noImg from "../assets/img/image-off.svg";
import { TagFilter } from "./tag-filter";
import { TagNames } from "../config/tags-names";

const ProductTemplateMapper = () => {
  const showProduct = (product) => {
    const rootPath = "main #product-infos";
    const getElemById = (id) => $(rootPath + " " + id);

    const fallBackValue = "unknown";
    const nameElem = getElemById("#product-name");
    const codeElem = getElemById("#product-code");
    const img = getElemById("#product-img");
    const nutritionImg = getElemById("#product-nutrition-img");
    const nutriGradeImg = getElemById("#product-nutri-grade");
    const novaGoupImg = getElemById("#product-nova-img");
    const ecoImg = getElemById("#product-eco-img");
    const brandElem = getElemById("#product-brand");
    const qteElement = getElemById("#product-qte");
    const packElement = getElemById("#product-pack");

    codeElem.text(product.getCode() || fallBackValue);
    nameElem.text(product.getName() || fallBackValue);
    img.attr("src", product.getImgUrl() || noImg);
    nutritionImg.attr("src", product.getNutritionImgUrl() || noImg);

    NutrigradeImgMapper().toImg(product.getNutriGrade(), nutriGradeImg);
    NovaMapper().toImg(product.getNovaGroup(), novaGoupImg);
    EcoMapper().toImg(product.getEcoScoreGrade(), ecoImg);

    brandElem.text(product.getBrand() || fallBackValue);
    qteElement.text = product.getServingSize() || fallBackValue;
    packElement.text(
      product.getPackaging()
        ? TagFilter().filter(product.getPackaging(), TagNames.getEnTag())
        : fallBackValue
    );
  };

  return { showProduct };
};

export { ProductTemplateMapper };
