import template from "./search-result.html";
import "./search-result.css";
import { ObserverHelper } from "../obs-helper/obs-helper";
import { ProductTemplateMapper } from "./product-template-mapper";

const SearchResultComponent = (
  ingredientsComponent,
  nutrientComponent,
  nutrimentComponent
) => {
  const observerHelper = ObserverHelper();
  const productTemplateMapper = ProductTemplateMapper();
  const mainElem = $("main");

  const getObserverHelper = () => observerHelper;

  const init = () => {
    mainElem.html(template);
    observerHelper.obsUpdate = (eventName, any, newValue) => refresh(newValue);
    ingredientsComponent.init();
    nutrientComponent.init();
    nutrimentComponent.init();
  };

  const show = () => {
    mainElem.addClass("display-block");
  };

  const refresh = (product) => {
    productTemplateMapper.showProduct(product);
    ingredientsComponent.display(product);
    nutrientComponent.display(product);
    nutrimentComponent.display(product);
    show();
  };

  return { init, getObserverHelper };
};

export { SearchResultComponent };
