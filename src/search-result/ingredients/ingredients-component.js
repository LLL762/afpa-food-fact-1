import template from "./ingredient.html";
import "./ingredients.css";

const IngredientsComponent = () => {
  let showBtn;
  let ingredientsElem;

  const displayIngredients = (product) => {
    const ingredients = product.getIngredients();

    ingredientsElem.innerHTML = "";

    for (let ingredient of ingredients) {
      const newElem = document.createElement("div");

      newElem.innerHTML = eval("`" + template + "`");
      ingredientsElem.appendChild(newElem.children[0]);
    }
  };

  const init = () => {
    showBtn = document.getElementById("ingredient-show-btn");
    ingredientsElem = document.getElementById("ingredients");
    showBtn.addEventListener("click", () => showBtnOnClick());
  };

  const showBtnOnClick = () => {
    console.log(ingredientsElem.classList);

    ingredientsElem.classList.toggle("display-none");
    ingredientsElem.classList.toggle("display-grid");
  };

  return { displayIngredients, init };
};

export { IngredientsComponent };
