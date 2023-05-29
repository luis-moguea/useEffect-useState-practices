import { useState, useEffect } from "react";
import Test from "./Test";

const RenderesTest = () => {
  const [show, setShow]: any[] = useState([]);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const changeColor = (event: any) => {
      if (event.clientX < window.innerWidth / 2) {
        setColor("blue");
      } else setColor("yellow");
    };

    window.addEventListener("mousemove", changeColor);
  }, []);

  const increaseCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCounter = () => {
    if (count <= 0) {
      setCount(0);
    } else setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setShow(json.map((el: any) => el.id)));
  }, []);

  return (
    <>
      <Test users={show} />
      <div style={{ backgroundColor: color }}>
        <button onClick={increaseCounter}>+</button>
        <p>{count}</p>
        <button onClick={decreaseCounter}>-</button>
      </div>
    </>
  );
};

export default RenderesTest;
