import redux from "redux";
const ADD = "ADD";
const DEC = "DEC";

const increAction = () => {
  return {
    type: ADD
  };
};
const decAction = () => {
  return {
    type: DEC
  };
};
