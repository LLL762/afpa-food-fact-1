const ApiConfig = (() => {
  const baseEndPoint = "https://world.openfoodfacts.org/api/2";
  const readEndpoint = "/product/";
  const searchEndPoint = "/search/";

  const getBaseEndPoint = () => baseEndPoint;
  const getSearchEndPoint = () => searchEndPoint;
  const getReadEndPoint = () => readEndpoint;

  return { getBaseEndPoint, getReadEndPoint, getSearchEndPoint };
})();

export { ApiConfig };
