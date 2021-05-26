import { useSelector, useDispatch } from "react-redux";
import { increAction, decAction } from "./action/action";
const Adder = () => {
  const counter = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  return (
    <div
      style={{ textAlign: "center", padding: "5" }}
      className="container">
      <h1>React with the counter</h1>
      <h5>
        <span onClick={() => dispatch(decAction())}>-</span>
        <input
          style={{ textAlign: "center" }}
          value={counter}
        />
        <span onClick={() => dispatch(increAction(5))}>
          +
        </span>
      </h5>
    </div>
  );
};

export default Adder;
