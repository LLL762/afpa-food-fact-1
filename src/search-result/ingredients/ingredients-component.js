import template from "./ingredient.html";

const IngredientsComponent = () => {
  let showBtn;
  let ingredientsElem;
  let ingredientsContent;

  const displayIngredients = (product) => {
    const ingredients = product.getIngredients();

    ingredientsContent.innerHTML = "";

    for (let ingredient of ingredients) {
      const newElem = document.createElement("div");

      newElem.innerHTML = eval("`" + template + "`");

      ingredientsContent.appendChild(newElem.children[0]);
      console.log(ingredientsContent);
    }
  };

  const init = () => {
    showBtn = document.getElementById("ingredient-show-btn");
    ingredientsElem = document.getElementById("ingredients");
    ingredientsContent = document.querySelector("#ingredients > .row");
  };

  const showBtnOnClick = () => {
    ingredientsElem.classList.toggle("display-none");
  };

  return { displayIngredients, init };
};

export { IngredientsComponent };
