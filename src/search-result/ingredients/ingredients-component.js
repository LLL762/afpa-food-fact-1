import template from "./ingredient.html";

const IngredientsComponent = () => {
  let showBtn;
  let ingredientsElem;
  let ingredientsContent;

  const displayIngredients = (product) => {
    const ingredients = product.getIngredients();

    ingredientsContent.html("");

    if (typeof ingredients === "object") {
      for (let ingredient of ingredients) {
        ingredientsContent.append(eval("`" + template + "`"));
      }
    } else {
      ingredientsContent.html("no ingredients specified");
    }
  };

  const init = () => {
    showBtn = $("ingredient-show-btn");
    ingredientsElem = $("ingredients");
    ingredientsContent = $("#ingredients > .row");
  };

  return { displayIngredients, init };
};

export { IngredientsComponent };
