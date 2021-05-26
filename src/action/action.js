export const increAction = (Data) => {
  return {
    type: "ADD",
    payload:Data
  };
};
export const decAction = () => {
  return {
    type: "DEC"
  };
};
