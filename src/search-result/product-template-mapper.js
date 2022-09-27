import { EcoMapper } from "./eco-grade-img-mapper";
import { NovaMapper } from "./nova-score-img-mapper";
import { NutrigradeImgMapper } from "./nutrigrade-img-mapper";
import noImg from "../assets/img/image-off.svg";

const ProductTemplateMapper = () => {
  const showProduct = (product) => {
    const rootPath = "main #product-infos";
    const getElemById = (id) => document.querySelector(rootPath + " " + id);

    const nameElem = getElemById("#product-name");
    const codeElem = getElemById("#product-code");
    const img = getElemById("#product-img");
    const nutritionImg = getElemById("#product-nutrition-img");
    const nutriGradeImg = getElemById("#product-nutri-grade");
    const novaGoupImg = getElemById("#product-nova-img");
    const ecoImg = getElemById("#product-eco-img");

    codeElem.textContent = product.getCode();
    nameElem.textContent = product.getName() || "unknown";
    img.setAttribute("src", product.getImgUrl() || noImg);
    nutritionImg.setAttribute("src", product.getNutritionImgUrl() || noImg);

    NutrigradeImgMapper().toImg(product.getNutriGrade(), nutriGradeImg);
    NovaMapper().toImg(product.getNovaGroup(), novaGoupImg);
    EcoMapper().toImg(product.getEcoScoreGrade(), ecoImg);
  };

  return { showProduct };
};

export { ProductTemplateMapper };
