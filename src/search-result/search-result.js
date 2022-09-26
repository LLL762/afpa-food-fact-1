import template from "./search-result.html";
import "./search-result.css";
import { ObserverHelper } from "../obs-helper/obs-helper";
import { ProductTemplateMapper } from "./product-template-mapper";

const SearchResultComponent = () => {
  const observerHelper = ObserverHelper();
  const productTemplateMapper = ProductTemplateMapper();

  const getObserverHelper = () => observerHelper;

  const init = () => {
    show();
    observerHelper.obsUpdate = (eventName, any, newValue) => refresh(newValue);
  };

  const show = () => {
    const mainElem = document.querySelector("main");
    mainElem.innerHTML = template;
  };

  const refresh = (product) => {
    productTemplateMapper.showProduct(product);
  };

  return { init, getObserverHelper };
};

export { SearchResultComponent };
