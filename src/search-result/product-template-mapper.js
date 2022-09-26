import { NutrigradeImgMapper } from "./nutrigrade-img-mapper";

const ProductTemplateMapper = () => {
  const showProduct = (product) => {
    const rootPath = "main #product-infos";
    const getElemById = (id) => document.querySelector(rootPath + " " + id);

    const nameElem = getElemById("#product-name");
    const codeElem = getElemById("#product-code");
    const img = getElemById("#product-img");
    const nutritionImg = getElemById("#product-nutrition-img");
    const nutriGradeImg = getElemById("#product-nutri-grade");
    const novaGoupElement = getElemById("#product-nova-group");

    codeElem.textContent = product.getCode();
    nameElem.textContent = product.getName();
    img.setAttribute("src", product.getImgUrl());
    nutritionImg.setAttribute("src", product.getNutritionImgUrl());

    NutrigradeImgMapper().toImg(product.getNutriGrade(), nutriGradeImg);

    novaGoupElement.textContent = product.getNovaGroup();
  };

  return { showProduct };
};

export { ProductTemplateMapper };
