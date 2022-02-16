import classes from "./Counter.module.css";
import { counterActions } from "../store/counter.js";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  //this hook helps to get the piece of data we need from the redux store.
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showToggle);

  //this hook helps to return a function which we can call with the action to change the reducer.
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(counterActions.increment());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseBy10Handler = () => {
    dispatch(counterActions.increase(20));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increament</button>
        <button onClick={increaseBy10Handler}>Increament By 10</button>
        <button onClick={decreaseHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
