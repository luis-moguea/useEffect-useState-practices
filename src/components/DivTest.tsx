interface Props {
  onClick: () => void;
  classDiv: string;
}

const DivTest = ({ onClick, classDiv }: Props) => {
  return (
    <>
      <button onClick={onClick}>showDiv</button>
      <div className={classDiv}></div>
    </>
  );
};

export default DivTest;
