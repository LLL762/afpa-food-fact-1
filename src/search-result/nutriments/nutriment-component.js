import template from "./nutriments.html";
const Mustache = require("mustache");

const NutrimentsComponent = () => {
  let nutrimentsElem;

  const display = (product) => {
    const nutriments = product
      .getNutriments()
      .filter((n) => n.getQte100g() > 0)
      .sort((n1, n2) => n2.getQte100g() - n1.getQte100g());
    nutrimentsElem.html("");

    if (nutriments && nutriments.length > 0) {
      const rendered = Mustache.render(template, { nutriments });
      nutrimentsElem.append(rendered);
    } else {
      nutrimentsElem.html("No nutriments info available");
    }
  };

  const init = () => {
    nutrimentsElem = $("#nutriments");
  };

  return { init, display };
};

export { NutrimentsComponent };
