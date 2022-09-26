const ProductTemplateMapper = () => {
  const showProduct = (product) => {
    const nameElem = document.querySelector(
      "main #product-infos #product-name"
    );

    nameElem.textContent = product.getName();
  };

  return { showProduct };
};

export { ProductTemplateMapper };
