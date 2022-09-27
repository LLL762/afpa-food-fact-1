const IngredientsComponent = () => {
  const template = (ingredient) => {
    return `<div class="ingredient"> ${ingredient} </div>`;
  };

  const displayIngredients = (product) => {
    const ingredientsElem = document.getElementById("ingredients");
    const ingredients = product.getIngredients();
    ingredientsElem.innerHTML = "";
    console.log(ingredients);

    for (let ingredient of ingredients.split(",")) {
      const newElem = document.createElement("div");
      newElem.innerHTML = template(ingredient);

      ingredientsElem.appendChild(newElem);
    }
  };

  return { displayIngredients };
};

export { IngredientsComponent };
