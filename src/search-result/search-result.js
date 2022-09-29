import template from "./search-result.html";
import "./search-result.css";
import { ObserverHelper } from "../obs-helper/obs-helper";
import { ProductTemplateMapper } from "./product-template-mapper";

const SearchResultComponent = (ingredientsComponent) => {
  const observerHelper = ObserverHelper();
  const productTemplateMapper = ProductTemplateMapper();
  const mainElem = document.querySelector("main");

  const getObserverHelper = () => observerHelper;

  const init = () => {
    mainElem.innerHTML = template;
    observerHelper.obsUpdate = (eventName, any, newValue) => refresh(newValue);
    ingredientsComponent.init();
  };

  const show = () => {
    mainElem.classList.add("display-block");
  };

  const refresh = (product) => {
    productTemplateMapper.showProduct(product);
    ingredientsComponent.displayIngredients(product);
    show();
  };

  return { init, getObserverHelper };
};

export { SearchResultComponent };
