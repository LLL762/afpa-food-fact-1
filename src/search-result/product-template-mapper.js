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

    codeElem.text(product.code || fallBackValue);
    nameElem.text(product.name || fallBackValue);
    img.attr("src", product.imgUrl || noImg);
    nutritionImg.attr("src", product.nutritionImgUrl || noImg);

    NutrigradeImgMapper().toImg(product.nutrigrade, nutriGradeImg);
    NovaMapper().toImg(product.novaGroup, novaGoupImg);
    EcoMapper().toImg(product.ecoScoreGrade, ecoImg);

    brandElem.text(product.brand || fallBackValue);
    qteElement.text(product.servingSize || fallBackValue);
    packElement.text(
      product.packaging
        ? TagFilter().filter(product.packaging, TagNames.getEnTag())
        : fallBackValue
    );
  };

  return { showProduct };
};

export { ProductTemplateMapper };
