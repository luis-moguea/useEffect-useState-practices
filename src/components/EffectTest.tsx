interface Props {
  dataTest: string[];
  text: string;
}

const EffectTest = ({ text, dataTest }: Props) => {
  return (
    <>
      <h1>Testing fetch and useEffect</h1>
      <p>{dataTest}</p>
      <p>{text}</p>
    </>
  );
};

export default EffectTest;
