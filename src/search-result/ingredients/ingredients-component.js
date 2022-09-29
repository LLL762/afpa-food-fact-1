import template from "./ingredient.html";

const IngredientsComponent = () => {
  let showBtn;
  let ingredientsElem;
  let ingredientsContent;

  const displayIngredients = (product) => {
    const ingredients = product.getIngredients();

    console.log(typeof ingredients);
    ingredientsContent.innerHTML = "";

    if (typeof ingredients === "object") {
      for (let ingredient of ingredients) {
        const newElem = document.createElement("div");

        newElem.innerHTML = eval("`" + template + "`");

        ingredientsContent.appendChild(newElem.children[0]);
      }
    } else {
      ingredientsContent.innerHTML = "no ingredients specified";
    }
  };

  const init = () => {
    showBtn = document.getElementById("ingredient-show-btn");
    ingredientsElem = document.getElementById("ingredients");
    ingredientsContent = document.querySelector("#ingredients > .row");
  };

  return { displayIngredients, init };
};

export { IngredientsComponent };
