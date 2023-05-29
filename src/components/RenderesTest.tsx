import { useState, useEffect } from "react";
import Test from "./Test";
import DivTest from "./DivTest";
import "./styles/renderedTest.css";

const RenderesTest = () => {
  const [show, setShow]: any[] = useState([]);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const [showDiv, setShowDiv] = useState("not-active");
  const [toggle, setToggle] = useState(false);

  const activeDiv = () => {
    setToggle((toggle) => !toggle);

    if (toggle === true) {
      setShowDiv("active");
    } else setShowDiv("not-active");

    return toggle;
  };

  useEffect(() => {
    const changeColor = (event: any) => {
      if (event.clientX < window.innerWidth / 2) {
        setColor("blue");
      } else setColor("yellow");
    };

    window.addEventListener("mousemove", changeColor);

    const removeListener = () => {
      window.removeEventListener("mousemove", changeColor);
    };

    return removeListener;
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
      <DivTest classDiv={showDiv} onClick={activeDiv} />
    </>
  );
};

export default RenderesTest;
