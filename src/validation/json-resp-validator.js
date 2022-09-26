const JsonRespValidator = () => {
  const validate = (json) => {
    return json.status == 1 ? "" : json.status_verbose;
  };

  return { validate };
};

export { JsonRespValidator };
