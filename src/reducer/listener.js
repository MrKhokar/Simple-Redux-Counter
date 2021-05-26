const initState = 0;
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};
export default reducer;
