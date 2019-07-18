export const setInputError = (ref, message) => {
  ref.innerErrorMessage = message;
  ref.innerError = true;
};
