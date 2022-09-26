const JsonRespValidator = () => {
  const isValid = (json) => {
    return json.status == 1 ? "" : json.status_verbose;
  };

  return { isValid };
};

export { JsonRespValidator };
