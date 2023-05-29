import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count <= 0) {
      setCount(0);
    } else setCount((prevCount) => prevCount - 1);
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <>
      <div className="block">
        <div className="flex">
          <button onClick={decrementCount}>-</button>
          <p>{count}</p>
          <button onClick={increaseCount}>+</button>
        </div>
        <button className="clear" onClick={setToZero}>
          CLEAR
        </button>
      </div>
    </>
  );
};

export default App;
