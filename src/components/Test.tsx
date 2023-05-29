interface Props {
  users: string;
  text?: string;
}

const Test = ({ users, text }: Props) => {
  return (
    <>
      <div>
        <p>{users}</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Test;
