const SearchInputValidator = () => {
  const validate = (input, max) => {
    if (!input) {
      return "please enter a value";
    }

    if (isNaN(input)) {
      return "character is not a number";
    }
    if (input.length > max) {
      return "${max} character maximum";
    }

    return "";
  };

  return { validate };
};

export { SearchInputValidator };
