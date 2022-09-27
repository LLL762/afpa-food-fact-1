const JsonRespValidator = () => {
  const validate = (json) => {
    if (!json) {
      return "Cannot reach API";
    }

    return json.status == 1 ? "" : json.status_verbose;
  };

  return { validate };
};

export { JsonRespValidator };
