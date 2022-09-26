import template from "./search-bar.html";
import "./search-bar.css";
import { EventNames, ObservableHelper } from "../obs-helper/obs-helper";

const SearchComponent = (foodService) => {
  const obsHelper = ObservableHelper();
  let searchInput;
  let form;
  let searchMsg;

  const show = () => {
    const headerElem = document.querySelector("header");
    headerElem.innerHTML = template;
  };

  const init = () => {
    show();
    searchInput = document.querySelector("header #search-input");
    form = document.querySelector("header form");
    searchMsg = document.querySelector("header #search-msg");
    form.addEventListener("submit", (event) => onSubmit(event));
  };

  const getSearchValue = () => {
    if (!searchInput) throw new Error("");
    return searchInput.value;
  };

  const onSubmit = (event) => {
    event.preventDefault(); //prevent page reloading.

    const $product = foodService.getProductByCode(getSearchValue());

    $product.then((result) =>
      typeof result === "string" ? setMsg(result) : notifyObservers(result)
    );
  };

  const notifyObservers = (product) => {
    obsHelper.notifyObservers(EventNames.getNewValidSearchResult(), 0, product);
    setMsg("product found!");
  };

  const getObsHelper = () => {
    return obsHelper;
  };

  const setMsg = (msg) => {
    searchMsg.textContent = msg;
  };

  return { init, getSearchValue, getObsHelper, setMsg };
};

export { SearchComponent };
