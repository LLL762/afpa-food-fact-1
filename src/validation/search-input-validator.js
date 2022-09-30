const SearchInputValidator = (max) => {
  const blankMsg = "please enter a value";
  const isNanMsg = "character is not a number";
  const maxCharMsg = `${max} character maximum`;

  const validate = (input) => {
    if (!input) {
      return blankMsg;
    }

    if (isNaN(input)) {
      return isNanMsg;
    }
    if (input.length > max) {
      return maxCharMsg;
    }

    return "";
  };

  const getBlankMsg = () => blankMsg;
  const getIsNanMsg = () => isNanMsg;
  const getMaxCharMsg = () => maxCharMsg;

  return { validate, getBlankMsg, getIsNanMsg, getMaxCharMsg };
};

export { SearchInputValidator };
