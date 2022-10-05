import template from "./ingredient.html";
const Mustache = require("mustache");

const IngredientsComponent = () => {
  let showBtn;
  let ingredientsElem;
  let ingredientsContent;

  const displayIngredients = (product) => {
    const ingredients = product.ingredients;

    ingredientsContent.html("");

    if (!typeof ingredients === "string") {
      for (let ingredient of ingredients) {
        const rendered = Mustache.render(template, {
          ingredient,
        });

        ingredientsContent.append(rendered);
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
