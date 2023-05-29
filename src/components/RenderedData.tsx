import EffectTest from "./EffectTest";
import { useState, useEffect } from "react";

const RenderedData = () => {
  const [data, setData]: any[] = useState([]);
  const [test, setTest]: any[] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json.map((el: any) => el.title));
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setTest(json.map((el: any) => el.id));
      });
  }, []);

  return (
    <>
      <EffectTest text={test} dataTest={data}></EffectTest>
    </>
  );
};

export default RenderedData;
